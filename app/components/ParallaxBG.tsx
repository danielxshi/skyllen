"use client";
import { Parallax, Background } from "react-parallax";
import Banner from "./banner";

export default function ParallaxBG({ children, ...props }) {
  return (
    <div className="parallax-bg">
      <Parallax
        blur={{ min: -20, max: 15 }}
        bgImage={props.url}
        bgImageAlt="the dog"
        className={` ${props.style}`}
        strength={-100}
      >
        {children}
      </Parallax>
    </div>
  );
}
