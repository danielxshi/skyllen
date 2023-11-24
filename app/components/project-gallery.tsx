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
    url: "/",
  },
  {
    name: "618 CARNAVRON",
    image: gallery2,
    location: "New Westminister",
    status: "NOW SELLING",
    url: "/",
  },
  {
    name: "PENDRELL ST",
    image: gallery3,
    location: "LocationHolder",
    status: "NOW SELLING",
    url: "/",
  },
];

const handleCity = (city, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${city}) center center`,
    //   background: `url("https://i.imgur.com/7WOEPhU.jpeg") center center`
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

      {/* Pass in array of projects and loop for all projects */}
      <div>
        {cities.map((el) => (
          <div
            className="gallery-button-container"
            key={el.name}
            // onMouseEnter={() => handleCity(el.image, cityBackground)}
            // onMouseOut={() => handleCityReturn(cityBackground)}
          >
            <GalleryButton
              // onMouseEnter={() => handleCity(el.image, cityBackground)}
              url={el.image}
              projectName={el.name}
              location={el.location}
              status={el.status}
              link={""}
            />
          </div>
        ))}
        {/* <GalleryButton /> */}
      </div>
    </section>
  );
}
