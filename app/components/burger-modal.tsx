"use client";
// Represents Project Info Modal
import Link from "next/link";
import gsap from "gsap";
import ProjectMessages from "../JSON/ProjectMessages";
import React, {
  useRef,
  useEffect,
  useCallback,
  Children,
  useState,
  SetStateAction,
  MutableRefObject,
} from "react";

import ReactDom from "react-dom";
import { useSpring, animated as a } from "react-spring";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import newyork from "../images/newyork.webp";

import gallery1 from "../images/1650-day.webp";
import gallery2 from "../images/618-lobby.webp";
import gallery3 from "../images/pendrell-aerial.webp";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  //   handleCity,
  staggerRevealClose,
} from "./Animation";
import FooterMessages from "../JSON/FooterItems";
import ContentfulImage from "@/lib/contentful-image";

type Props = {
  showModal;
  setShowModal;
  state;
  ListClick;
};

const Background = styled.div`
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: -webkit-fit-content;
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #fff;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 99;
  border-radius: 3px;
  overflow-y: scroll;
`;

const cities = [
  {
    url: "/posts/1650-on-second",
    name: "1650 ON SECOND",
    image: "https://i.imgur.com/hvXK67e.jpeg",
  },
  {
    url: "/posts/618-carnavron",
    name: "618 CARNAVRON",
    image: "https://i.imgur.com/6p4tNs5.jpeg",
  },
  {
    url: "/posts/pendrell-street",
    name: "PENDRELL ST",
    image: "https://i.imgur.com/3loZccM.jpeg",
  },
];

export const renderSwitch2 = (
  params:
    | {
        contact: {
          content: {
            email: string;
            address: string;
            city: string;
            phone: string;
          }[];
        };
        projects?: undefined;
        socials?: undefined;
        copyright?: undefined;
      }
    | {
        projects: { content: { project: string; url: string }[] };
        contact?: undefined;
        socials?: undefined;
        copyright?: undefined;
      }
    | {
        socials: { content: { link: string; url: string }[] };
        contact?: undefined;
        projects?: undefined;
        copyright?: undefined;
      }
    | {
        copyright: { content: { text: string }[] };
        contact?: undefined;
        projects?: undefined;
        socials?: undefined;
      }
) => {
  type Bar = {
    [key: string]: string;
  };

  const keys = Object.keys(params);
  const value = keys;
  const test = params[value[0]];
  const test2 = test["content"];

  switch (keys[0]) {
    case "contact":
      return (
        <div className="footer-contact-container hidden">
          <ul>
            {test2.map(
              (
                item: {
                  [x: string]:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | React.PromiseLikeOfReactNode
                    | null
                    | undefined;
                },
                index: any
              ) => (
                <>
                  <li className="underscore-cta">{item["email"]}</li>
                  <li className="underscore-cta">{item["address"]}</li>
                  <li className="underscore-cta">{item["city"]}</li>
                  <li className="underscore-cta">{item["phone"]}</li>
                </>
              )
            )}
          </ul>
        </div>
      );

    default:
      return null;
  }
};

export const renderSwitch = (params: { [x: string]: any }) => {
  const keys = Object.keys(params);
  const value = keys;
  const test = params[value[0]];
  const test2 = test["content"];

  switch (keys[0]) {
    case "home":
      return (
        <div className="experience-container">
          <ul>
            {test2.map(
              (
                item: {
                  [x: string]:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | React.PromiseLikeOfReactNode
                    | null
                    | undefined;
                },
                index: React.Key | null | undefined
              ) => (
                <>
                  <li key={index}>
                    <p className="whitespace-nowrap	">{item["header"]}</p>
                  </li>
                </>
              )
            )}
          </ul>
        </div>
      );
    default:
      return <>{keys[0]}</>;
  }
};

const handleCity = (city: string, target: gsap.TweenTarget) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${city}) center center`,
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut",
  });
  gsap.from(target, {
    duration: 0.4,
    skewY: 2,
    transformOrigin: "right top",
  });
};

export const BurgerModal = ({
  showModal,
  setShowModal,
  state,
  ListClick,
}: Props) => {
  let menuLayer: React.MutableRefObject<null> | HTMLDivElement | null;
  let reveal1: React.MutableRefObject<null> | HTMLDivElement | null;
  let reveal2: React.MutableRefObject<null> | HTMLDivElement | null;
  let cityBackground: React.MutableRefObject<null> | HTMLDivElement | null;
  let line1:
    | React.MutableRefObject<null>
    | HTMLDivElement
    | HTMLAnchorElement
    | null;
  let line2:
    | React.MutableRefObject<null>
    | HTMLDivElement
    | HTMLAnchorElement
    | null;
  let line3:
    | React.MutableRefObject<null>
    | HTMLDivElement
    | HTMLAnchorElement
    | null;
  let info = useRef(null);

  const modalRef = React.useRef<HTMLInputElement>(null);

  const animation = useSpring({
    config: {
      duration: 500,
    },
    opacity: showModal ? 1 : 0,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const [hidden, setHidden] = useState(false);
  const [element, setElement] = useState<null | HTMLDivElement>(null);

  return (
    <header className="burger-menu">
      <AnimatePresence>
        {showModal ? (
          <motion.div ref={modalRef}>
            <Background ref={modalRef}>
              <a.div className="" style={animation}>
                <ModalWrapper ref={(el) => setElement(el)}>
                  <motion.div
                    className=""
                    animate={hidden ? "hidden" : "visible"}
                  >
                    <div
                      ref={(el) => (menuLayer = el)}
                      className="hamburger-menu"
                    >
                      <div
                        ref={(el) => (reveal1 = el)}
                        className="menu-secondary-background-color"
                      ></div>
                      <div ref={(el) => (reveal2 = el)} className="menu-layer">
                        <div
                          ref={(el) => (cityBackground = el)}
                          className="menu-city-background bg-cover"
                        ></div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                          className="container h-full"
                        >
                          <div className="wrapper">
                            <div className="menu-links">
                              <nav>
                                <ul>
                                  <li>
                                    <Link
                                      onMouseEnter={(e) => handleHover(e)}
                                      onMouseOut={(e) => handleHoverExit(e)}
                                      ref={(el) => (line3 = el)}
                                      href="/projects"
                                      onClick={() => {
                                        ListClick.onClick();
                                      }}
                                    >
                                      Projects
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      onMouseEnter={(e) => handleHover(e)}
                                      onMouseOut={(e) => handleHoverExit(e)}
                                      ref={(el) => (line1 = el)}
                                      href="/company"
                                      onClick={() => {
                                        ListClick.onClick();
                                      }}
                                    >
                                      Company
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      onMouseEnter={(e) => handleHover(e)}
                                      onMouseOut={(e) => handleHoverExit(e)}
                                      ref={(el) => (line2 = el)}
                                      href="/news"
                                      onClick={() => {
                                        ListClick.onClick();
                                      }}
                                    >
                                      News
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      onMouseEnter={(e) => handleHover(e)}
                                      onMouseOut={(e) => handleHoverExit(e)}
                                      ref={(el) => (line3 = el)}
                                      href="/contact"
                                      onClick={() => {
                                        ListClick.onClick();
                                      }}
                                    >
                                      Contact
                                    </Link>
                                  </li>
                                </ul>
                              </nav>

                              <div
                                // ref={(el) => (info = el)}
                                className="info"
                              >
                                {FooterMessages.FooterItems.map(
                                  (item, index) => {
                                    return (
                                      <div key={index}>
                                        {renderSwitch2(item)}
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                              <div className="locations">
                                PROJECTS:
                                {cities.map((el) => (
                                  // <div className="underscore-cta">
                                    <Link
                                      onClick={() => {
                                        ListClick.onClick();
                                      }}
                                      href={el.url}
                                      onMouseEnter={() =>
                                        handleCity(el.image, cityBackground)
                                      }
                                      onMouseOut={() =>
                                        handleCityReturn(cityBackground)
                                      }
                                    >
                                      {el.name}
                                    </Link>
                                  // </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </ModalWrapper>
              </a.div>
            </Background>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default BurgerModal;
