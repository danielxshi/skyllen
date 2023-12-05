"use client";
import ParallaxBG from "./ParallaxBG";
import { motion } from "framer-motion";
import React from "react";
import localFont from "next/font/local";
import { getLocalizedMessages } from "@/src/i18n";

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
  //let dataValue = Object.values(dallas);
  const localizedMessages = getLocalizedMessages();
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
                {localizedMessages.HEADER_PT_1},
                <br/>
                {localizedMessages.HEADER_PT_2}
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
