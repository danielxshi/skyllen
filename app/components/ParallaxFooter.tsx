"use client";
import { Parallax, Background } from "react-parallax";
import Banner from "./banner";
import ContentfulImage from "@/lib/contentful-image";

type Props = {
  children: React.ReactNode; // as React.FC declares it for you, just delete this line
  style: string,
  url: string,
};


const ParallaxFooter : React.FC<Props> = ({ children, ...props }) => {
  return (
    // <section className={`${props.style}`}>{children}</section>

    <div className={`parallax-bg-container relative ${props.style}`}>
      <div className="z-10 block relative gallery-bg">{children}</div>


      {/* <Parallax
        blur={{ min: -20, max: 15 }}
        bgImage={props.url}
        bgImageAlt="the dog"
        className=""
        strength={-100}
      >
        {children}
      </Parallax> */}
      <div className="parallax-bg z-0">
        <ContentfulImage src={props.url} fill={true} />
      </div>
    </div>
  );
}

export default ParallaxFooter;