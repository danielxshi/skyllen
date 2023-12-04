"use client";

import ProjectMessages from "../JSON/ProjectMessages";
import PageSection from "../components/page-section";
import Banner from "../components/banner";
import Button from "../components/button";
import dallas from "../images/dallas.webp";
import { Parallax, Background } from "react-parallax";
import ParallaxBG from "../components/ParallaxBG";
import projectImageL1 from "../images/living-space-landing.webp";
import projectImageR1 from "../../public/images/carnavron/618-Hero.webp";
import projectImageL2 from "../../public/images/second/1650-signage.webp";
import projectImageR2 from "../images/1650-night.webp";
import projectImageL3 from "../images/pendrell-aerial.webp";
import projectImageR3 from "../../public/images/pendrell/Hero-Pendrell.webp";
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
    description:
      "An established neighbourhood connecting a rich past to a modern downtown lifestle - 618 Carnarvon provides an elevated lifestyle in the heart of New Westminster.",
  },
  {
    name: "1650 ON SECOND",

    page: 1,
    imageOne: projectImageL2,
    imageTwo: projectImageR2,
    link: "/posts/1650-on-second",
    description:
      "A vibrant four-storey centerpiece providing bright showroom and office opportunities set in Kitsilano's trendiest business district.",
  },
  {
    name: "PENDRELL ST",
    page: 2,
    imageOne: projectImageL3,
    imageTwo: projectImageR3,
    link: "/posts/pendrell-street",
    description:
      "Nested amongst natural wonders and thriving streets, Skyllen Pacific's upcoming downtown project will offer beautiful views of Vancouver's vistas while boasting proximity to modern day conveniences and luxuries.",
  },
];

export default function Page() {
  return (
    <div className="project-page">
      {/* Insert background image */}
      <Parallax
        blur={{ min: -20, max: 15 }}
        bgImage="https://i.imgur.com/D5u2JE0.jpg"
        bgImageAlt="the dog"
        className=""
        strength={-100}
      >
        <Banner
          style="min-h-screen flex"
          // title={ProjectMessages.CompanyTitle}
          overline="PROJECT"
        ></Banner>
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
                    <div className="project-card-content bg-gradient text-white p-12 md:p-52 w-full">
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
                            Learn More
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
                    <div className="project-card-content w-screen md:w-screen-1/2 md:w-2/4 md:w-w-screen-1/2">
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
