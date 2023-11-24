"use client";
import ParallaxBG from "../components/ParallaxBG";
import Button from "../components/button";

export default function Banner({ children, ...props }) {
  return (
    <div className="min-h-screen">
      <ParallaxBG
        style="h-screen-2/3"
        url="https://images.pexels.com/photos/5365875/pexels-photo-5365875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
