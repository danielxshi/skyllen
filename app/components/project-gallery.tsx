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
import { getLocalizedMessages, getLocalizedProjects } from "@/src/i18n";
const localizedMessages = getLocalizedMessages();
const localizedProjects = getLocalizedProjects();

type Props = {
  children?: React.ReactNode;
};

const cities = [
  {
    // name: localizedProjects[0].TITLE, 
    name: "1650 ON SECOND",
    image: gallery1,
    location: "Kitsilano, BC",
    status: localizedMessages.NOW_LEASING,
    url: "/posts/1650-on-second",
  },
  {
    name: "618 CARNAVRON",
    image: gallery2,
    location: "New Westminister, BC",
    status: localizedMessages.NOW_SELLING,
    url: "/posts/618-carnavron",
  },
  {
    name: "EDITION",
    image: gallery3,
    location: "Downtown Vancouver, BC",
    status: localizedMessages.COMING_SOON,
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
      <div className="flex flex-col md:grid md:grid-cols-9 gap-8">
        {cities.map((el) => (
          <div
            className="gallery-button-container mb-16 last:mb-0 md:mb-0 md:col-span-3"
            key={el.name}
          >
            <GalleryButton
              url={el.image}
              projectName={el.name} // TODO: change to localizedMessages
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
