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

const cities = [
  {
    name: "1650 ON SECOND",
    image: gallery1,
    location: "LocationHolder",
    status: "NOW LEASING",
    url: "/posts/1650-on-second",
  },
  {
    name: "618 CARNAVRON",
    image: gallery2,
    location: "New Westminister",
    status: "NOW SELLING",
    url: "/posts/618-carnavron",
  },
  {
    name: "PENDRELL ST",
    image: gallery3,
    location: "LocationHolder",
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

export default function ProjectGallery(props) {
  return (
    <section>
      <Headline
        overline="our projects"
        title="Smart Design and Distinct Spaces"
      />

      <div className="flex flex-col md:flex-row">
        {cities.map((el) => (
          <div className="gallery-button-container" key={el.name}>
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
}
