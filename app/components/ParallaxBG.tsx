"use client";
import { Parallax, Background } from "react-parallax";
import Banner from "./banner";
import ContentfulImage from "@/lib/contentful-image";

export default function ParallaxBG({ children, ...props }) {
  return (
    // <section className={`${props.style}`}>{children}</section>

    <div className={`parallax-bg-container relative ${props.style}`}>
      <div className="z-10 block relative gallery-bg">{children}</div>

      <div className="parallax-bg z-0">
        <ContentfulImage src={props.url} fill={true} />
      </div>
    </div>
  );
}
