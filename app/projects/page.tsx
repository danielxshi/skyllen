"use client";

import ProjectMessages from "../JSON/ProjectMessages";
import PageSection from "../components/page-section";
import Banner from "../components/banner";
import Button from "../components/button";
import dallas from "../images/dallas.webp";
import { Parallax, Background } from "react-parallax";
import ParallaxBG from "../components/ParallaxBG";
import projectImageL1 from "../images/living-space-landing.webp";
import projectImageR1 from "../images/living-space.webp";
import projectImageL2 from "../images/1650-night.webp";
import projectImageR2 from "../images/1650-day.webp";
import projectImageL3 from "../images/pendrell-aerial.webp";
import projectImageR3 from "../images/streetview.webp";


import {
  WorkBackground,
  WorkContainer,
  WorkBleed,
  WorkBleedR,
  WorkContain,
} from "../company/work";
import ContentfulImage from "@/lib/contentful-image";

const projects = [
  {
    name: "618 CARNAVRON",
    imageOne: projectImageL1,
    imageTwo: projectImageR1,
    link: "/posts/618-carnavron",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga. Sit ab, cupiditate possimus nisi nemo esse laboriosam libero, labore a iusto voluptatibus modi. Ipsa maiores tempore odit eius placeat?",
  },
  {
    name: "1650 ON SECOND",

    imageOne: projectImageL2,
    imageTwo: projectImageR2,
    link: "/posts/1650-on-second",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga. Sit ab, cupiditate possimus nisi nemo esse laboriosam libero, labore a iusto voluptatibus modi. Ipsa maiores tempore odit eius placeat?",
  },
  {
    name: "PENDRELL ST",

    imageOne: projectImageL3,
    imageTwo: projectImageR3,
    link: "/posts/pendrell-street",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga. Sit ab, cupiditate possimus nisi nemo esse laboriosam libero, labore a iusto voluptatibus modi. Ipsa maiores tempore odit eius placeat?",
  },
];

export default function Page() {
  return (
    <>
      {/* Insert background image */}
      <Parallax
        blur={{ min: -20, max: 15 }}
        bgImage="https://images.pexels.com/photos/2271442/pexels-photo-2271442.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        bgImageAlt="the dog"
        className=""
        strength={-100}
      >
        <Banner
          style="min-h-screen flex"
          title={ProjectMessages.CompanyTitle}
          overline="PROJECT"
        ></Banner>
      </Parallax>

      {projects.map((el) => (
        <PageSection style="snap-scroll-container pb-0 pt-0 overflow-hidden max-h-screen">
          <WorkContainer>
            <WorkBleed>
              <div className="project-card-content">
                <div className="justify-between h-3/4 flex flex-col">
                  <div className="">
                    <h3>{el.name} </h3>
                    <span>-</span>
                  </div>
                  <div>
                    <p className="tracking-tight pb-8">{el.description}</p>
                    <Button
                      onClick={() => {
                        this.props.onClick();
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
            </WorkBleed>
            <WorkBleedR>
              <ContentfulImage
                height="100"
                quality={75}
                src={el.imageTwo}
                width={840}
              />
            </WorkBleedR>
          </WorkContainer>
        </PageSection>
      ))}
    </>
  );
}
