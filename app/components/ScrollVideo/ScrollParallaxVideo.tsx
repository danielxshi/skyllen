"use client";
import React, {
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
// import "./styles.css";
import {
  clamp,
  motion,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";
import {
  Tile,
  TileBackground,
  TileContent,
  TileWrapper,
} from "../../company/tile";

import {
  WorkBackground,
  WorkContainer,
  WorkBleedProject,
  WorkBleed,
  WorkBleedR,
  WorkContain,
} from "../../company/work";
import projectImageL1 from "../../images/living-space-landing.webp";
import projectImageR1 from "../../images/living-space.webp";
import projectImageL2 from "../../images/1650-night.webp";
import projectImageR2 from "../../images/1650-day.webp";
import projectImageL3 from "../../images/pendrell-aerial.webp";
import projectImageR3 from "../../images/streetview.webp";
import ContentfulImage from "@/lib/contentful-image";
import localFont from "next/font/local";
import ParallaxFooter from "../ParallaxFooter";
import Banner from "../banner";
import EN from "../../../src/i18n/en";

const quicksand = localFont({
  src: [
    {
      path: "../../fonts/quicksand/Quicksand-VariableFont_wght.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

const ParallaxScrollVideo = () => {
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const [videoScrollDistance, setVideoScrollDistance] = useState(0);

  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const [hasLoaded, setLoaded] = useState(false);

  const video = videoRef.current;

  const projects = [
    {
      page: 0,
      description: EN.STORY1,
    },
    {
      page: 1,
      description: EN.STORY2,
    },
    {
      page: 2,
      description: EN.STORY3,
    },
  ];

  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <ParallaxFooter url={require("../../company/train.gif")}>
          <div className="min-h-screen"></div>
        </ParallaxFooter>
        {projects.map((el) => (
          <Tile
            page={el.page}
            renderContent={({ progress }) => (
              <div>
                <div className="h-screen flex flex-col-reverse p-8 w-screen absolute z-50 text-white bg-blur-black">
                  <div className="mb-auto text-content h-3/4 mt-auto flex flex-col mr-auto ml-auto w-600 justify-center">
                    <div>
                      <h3 className="tracking-tight pb-8 text-center">
                        {el.description}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          ></Tile>
        ))}
      </TileContent>
    </TileWrapper>
  );
};

export default ParallaxScrollVideo;
