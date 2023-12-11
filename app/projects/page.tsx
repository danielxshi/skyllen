"use client";

import ProjectMessages from "../JSON/ProjectMessages";
import PageSection from "../components/page-section";
import Banner from "../components/banner";
import Button from "../components/button";
import dallas from "../images/dallas.webp";
import { Parallax, Background } from "react-parallax";
import ParallaxBG from "../components/ParallaxBG";
import projectImageL1 from "../../public/images/dec7/P5.webp";
import projectImageR1 from "../../public/images/carnavron/618-Hero.webp";
import projectImageL2 from "../../public/images/second/1650-signage.webp";
import projectImageR2 from "../images/1650-night.webp";
import projectImageL3 from "../images/pendrell-aerial.webp";
import projectImageR3 from "../../public/images/pendrell/Hero-Pendrell.webp";
import localFont from "next/font/local";
import { getLocalizedMessages } from "@/src/i18n";
import test from "../../public/images/dec7/P6.webp"

const localizedMessages = getLocalizedMessages();

const montserratt = localFont({
  src: [
    {
      path: "../fonts/montserrat/Montserrat-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const montserrattBold = localFont({
  src: [
    {
      path: "../fonts/montserrat/Montserrat-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
import {
  Tile,
  TileBackground,
  TileContent,
  TileWrapper,
} from "../company/tile";

import {
  WorkBackground,
  WorkContainer,
  WorkBleedProject,
  WorkBleed,
  WorkBleedR,
  WorkContain,
} from "../company/work";
import ContentfulImage from "@/lib/contentful-image";

const projects = [
  {
    name: "618 CARNAVRON",
    page: 0,
    imageOne: projectImageL1,
    imageTwo: projectImageR1,
    link: "/posts/618-carnavron",
    description: localizedMessages.PROJECT_618_EXCERPT,
  },
  {
    name: "1650 ON SECOND",

    page: 1,
    imageOne: projectImageL2,
    imageTwo: projectImageR2,
    link: "/posts/1650-on-second",
    description: localizedMessages.PROJECT_1650_EXCERPT,
  },
  {
    name: "EDITION",
    page: 2,
    imageOne: projectImageL3,
    imageTwo: test,
    link: "/posts/pendrell-street",
    description: localizedMessages.PROJECT_EDITION_EXCERPT,
  },
];

export default function Page() {
  return (
    <div className="project-page">
      {/* Insert background image */}
      <Parallax
        bgImage="https://i.imgur.com/D5u2JE0.jpg"
        bgImageAlt="the dog"
        className=""
        strength={-300}
      >
        <Banner
          style="min-h-screen flex"
          // title={ProjectMessages.CompanyTitle}
          overline={localizedMessages.PROJECT_OVERLINE}
        >
          {/* We prioritizes{" "}
          <strong className={` ${montserrattBold.className}`}>
            smart design
          </strong>{" "}
          and{" "}
          <strong className={` ${montserrattBold.className}`}>
            distinct spaces
          </strong>{" "}
          to craft{" "}
          <strong className={` ${montserrattBold.className}`}>
            enduring homes
          </strong>{" "}
          and{" "}
          <strong className={` ${montserrattBold.className}`}>
            workplaces
          </strong>
          . */}

          {localizedMessages.PROJECT_HEADLINE}
        </Banner>
      </Parallax>

      <TileWrapper numOfPages={3}>
        <TileBackground>
          <WorkBackground />
        </TileBackground>
        <TileContent>
          {projects.map((el) => (
            <Tile
              page={el.page}
              renderContent={({ progress }) => (
                <WorkContainer>
                  <WorkBleedProject progress={progress}>
                    <div className="project-card-content bg-gradient text-white p-12 w-full">
                      <div className="text-content justify-between h-3/4 flex flex-col">
                        <div className="">
                          <h3>{el.name} </h3>
                        </div>
                        <div>
                          <p className="tracking-tight pb-8">
                            {el.description}
                          </p>
                          <Button
                            style="border-white"
                            onClick={() => {
                              // this.props.onClick();
                            }}
                            url={el.link}
                          >
                            {localizedMessages.LEARN_MORE}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <ContentfulImage
                      height="100"
                      quality={75}
                      src={el.imageOne}
                      width={840}
                    />
                  </WorkBleedProject>
                  <WorkBleed progress={progress}>
                    <div className="project-card-content w-screen md:w-w-screen-1/2">
                      <ContentfulImage
                        height="100"
                        quality={75}
                        src={el.imageTwo}
                        width={840}
                      />
                    </div>
                  </WorkBleed>
                </WorkContainer>
              )}
            ></Tile>
          ))}
        </TileContent>
      </TileWrapper>
    </div>
  );
}
