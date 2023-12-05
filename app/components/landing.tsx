"use client";
import ProjectMessages from "../JSON/ProjectMessages";
import ParallaxBG from "./ParallaxBG";
import { motion } from "framer-motion";
import dallas from "../images/living-space-landing.webp";
import React, { useRef, useEffect } from "react";
import localFont from "next/font/local";
import EN from "../../src/i18n/en";
import CH from "../../src/i18n/ch/"

const montserratt = localFont({
  src: [
    {
      path: "../fonts/montserrat/Montserrat-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Landing() {
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
              <h1 className={`${montserratt.className}`}>
                {EN.HEADER_PT_1},
                <br/>
                {EN.HEADER_PT_2}
              </h1>
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
