"use client";
import ProjectMessages from "../JSON/ProjectMessages";
import ParallaxBG from "./ParallaxBG";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import dallas from "../images/living-space-landing.webp";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ContentfulImage from "@/lib/contentful-image";
import Logo from "../images/logo-landing.webp";
import localFont from "next/font/local";
// import { useState } from "react";


const montserratt = localFont({
  src: [
    {
      path: "../fonts/montserrat/Montserrat-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const renderSwitch = (params) => {
  const keys = Object.keys(params);
  const value = keys;
  const test = params[value[0]];
  const test2 = test["content"];

  switch (keys[0]) {
    case "home":
      return (
        <>
          {test2.map((item, index) => (
            <>
              <h1 key={index} className="">
                {item["header"]}
              </h1>
            </>
          ))}
        </>
      );
    default:
      return null;
  }
};

export default function Landing() {
  // const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   loading
  //     ? document.querySelector("body").classList.add("loading")
  //     : document.querySelector("body").classList.remove("loading");
  // }, [loading]);

  let dataValue = Object.values(dallas);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
      >
        <ParallaxBG
          url="https://i.imgur.com/BuyW1x3.jpeg"
          style="text-white landing-parallax"
        >
          <section className="landing-content">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
              className="header-wrapper container"
            >
              <h1 className={`${montserratt.className}`}>Eminent Design, <br/>Modern Experience.</h1>
              <a className="absolute left-2/4 bottom-16" href="#demo">
                <div className="box">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </motion.div>
          </section>
        </ParallaxBG>
      </motion.div>
    </>
  );
}
