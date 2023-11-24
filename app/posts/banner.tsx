"use client";
import ParallaxBG from "../components/ParallaxBG";
import Button from "../components/button";

export default function Banner({ children, ...props }) {
  return (
    <div className="min-h-screen">
      <ParallaxBG
        style="h-screen-3/4"
        url={props.url}
      >
        <div className="container flex h-full text-white ">
          <div className="mt-auto mb-14">
            <p className="">{props.excerpt}</p>
            <h1 className="m-auto mb-14">{props.title} </h1>
            <Button url={props.website}>VISIT THE WEBSITE</Button>
          </div>
        </div>
      </ParallaxBG>
      <div className="container mt-16">
        <ul className="mt-14">{children}</ul>
      </div>
    </div>
  );
}
