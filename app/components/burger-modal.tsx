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

export const renderSwitch2 = (params) => {
  const keys = Object.keys(params);
  const value = keys;
  const test = params[value];
  const test2 = test["content"];

  switch (keys[0]) {
    case "contact":
      return (
        <div className="footer-contact-container hidden">
          <ul>
            {test2.map((item, index) => (
              <>
                <li className="underscore-cta">{item["email"]}</li>
                <li className="underscore-cta">{item["address"]}</li>
                <li className="underscore-cta">{item["city"]}</li>
                <li className="underscore-cta">{item["phone"]}</li>
              </>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
};

export const renderSwitch = (params) => {
  const keys = Object.keys(params);
  const value = keys;
  const test = params[value];
  const test2 = test["content"];

  switch (keys[0]) {
    case "home":
      return (
        <div className="experience-container">
          <ul>
            {test2.map((item, index) => (
              <>
                <li key={index}>
                  <p className="whitespace-nowrap	">{item["header"]}</p>
                </li>
              </>
            ))}
          </ul>
        </div>
      );
    default:
      return <>{keys[0]}</>;
  }
};

const handleCity = (city, target) => {
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

export const BurgerModal = ({ showModal, setShowModal, state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 500,
    },
    opacity: showModal ? 1 : 0,
  });

  const closeModal = () => {
    console.log("close modal");
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const [hidden, setHidden] = useState(false);
  //   const [pos, setPos] = useState(0);
  const [element, setElement] = useState(null);
  // useEventListener("scroll", (ev) => setPos(ev.target.scrollTop), element);

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
                    {/* Akram Burger */}
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

                        {/* Using projectMessages */}
                        {/* {ProjectMessages.PageItems.map((item, index) => {
                          return <>{renderSwitch(item)}</>;
                        })} */}

                        {/* {ProjectMessages.PageItems.map((item, index) => {
                          return <p>{item}<p/>;
                        })} */}

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
                                      onClick={closeModal}
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
                                      onClick={closeModal}
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
                                      onClick={closeModal}
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
                                      onClick={closeModal}
                                    >
                                      Contact
                                    </Link>
                                  </li>
                                </ul>
                              </nav>

                              <div ref={(el) => (info = el)} className="info">
                                {FooterMessages.FooterItems.map(
                                  (item, index) => {
                                    return <div key={index}>{renderSwitch2(item)}</div>;
                                  }
                                )}
                              </div>
                              <div className="locations">
                                PROJECTS:
                                {cities.map((el) => (
                                  <Link
                                    onClick={closeModal}
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
                                ))}
                              </div>
                            </div>
                          </div>
                          {/* <ContentfulImage src={dallas} width={500} quality={50}/> */}
                        </motion.div>
                      </div>
                    </div>
                    {/* End of Akaram Burger */}
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

// export async function getStaticProps({ params, preview = false }) {
//   const data = await getPostAndMorePosts(params.slug, preview);

//   return {
//     props: {
//       preview,
//       post: data?.post ?? null,
//       morePosts: data?.morePosts ?? null,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug();
//   return {
//     paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
//     fallback: true,
//   };
// }
