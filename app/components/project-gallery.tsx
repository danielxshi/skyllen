"use client";

import Head from "next/head";
import GalleryButton from "./gallery-buttons";
import Headline from "./headline";
import gallery1 from "../images/1650-day.webp";
import gallery2 from "../images/618-lobby.webp";
import gallery3 from "../images/pendrell-aerial.webp";
import React, {
  useRef,
  useEffect,
  useCallback,
  Children,
  useState,
} from "react";

type Props = {
  children?: React.ReactNode;
};

const cities = [
  {
    name: "1650 ON SECOND",
    image: gallery1,
    location: "Kitsilano, BC",
    status: "NOW LEASING",
    url: "/posts/1650-on-second",
  },
  {
    name: "618 CARNAVRON",
    image: gallery2,
    location: "New Westminister, BC",
    status: "NOW SELLING",
    url: "/posts/618-carnavron",
  },
  {
    name: "PENDRELL ST",
    image: gallery3,
    location: "Downtown Vancouver, BC",
    status: "NOW SELLING",
    url: "/posts/pendrell-street",
  },
];

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

const ProjectGallery = ({ children }: Props) => {
  return (
    <section>
      {children}
      <div className="flex flex-col md:flex-row">
        {cities.map((el) => (
          <div
            className="gallery-button-container mb-16 last:mb-0 md:mb-0"
            key={el.name}
          >
            <GalleryButton
              url={el.image}
              projectName={el.name}
              location={el.location}
              status={el.status}
              link={el.url}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
