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

export const renderSwitch = (params) => {
  const keys = Object.keys(params);
  const value = keys;
  const test = params[value];
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

  let dataValue = Object.values(dallas)
  return (
    <>
      <ParallaxBG
        url="https://i.imgur.com/BuyW1x3.jpeg"
      >
        <section className="landing-content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="header-wrapper container text-white"
          >
            <h1 className="">
              {/* {ProjectMessages.PageItems.map((item, index) => {
              return <>{renderSwitch(item)}</>;
            })} */}
              Eminent Design, Modern Experience.
            </h1>
          </motion.div>
        </section>
      </ParallaxBG>
    </>
  );
}
