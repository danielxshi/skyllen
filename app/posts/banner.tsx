"use client";
import ParallaxBG from "../components/ParallaxBG";
import Button from "../components/Button/FillButton";

type Props = {
  children?: React.ReactNode;
  url: string;
  excerpt?: string;
  title?: string;
  website: string;
};

const Banner = ({ children, url, excerpt, title, website }: Props) => {
  return (
    <div className="min-h-screen project-banner">
      <ParallaxBG style="h-screen-3/4" url={url}>
        <div className="container flex h-full text-white ">
          <div className="mt-auto mb-14">
            <p className="">{excerpt}</p>
            <h1 className="m-auto mb-14">{title} </h1>
            {/* <Button url={website}>VISIT THE WEBSITE</Button> */}
          </div>
        </div>
      </ParallaxBG>
      <div className="container mt-16">
        <ul className="mt-14">{children}</ul>
      </div>
    </div>
  );
};

export default Banner;
