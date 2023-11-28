import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkBleed } from "./work";
import ContentfulImage from "@/lib/contentful-image";
import image1 from "../images/living-space-landing.webp";
import image2 from "../images/pendrell-aerial.webp";
import image3 from "../images/618-lobby.webp";

const content = [
  {
    name: "INSPIRATION",
    page: 0,
    image: image1,
    textOne:
      "Skyllen Pacific is inspired by the evolving interpretations of urbanity and sustainability emerging from recent cityscapes.",
    textTwo:
      "Valuing responsible investment, Skyllen champions sustainable practices during the management process to improve local infrastructure and public spaces.",
  },
  {
    name: "COLLABORATION",
    page: 1,
    image: image2,
    textOne:
      "Every Skyllen Pacific project involves thoughtful collaboration between project context and contemporary design.",
    textTwo:
      "Engaging experienced industry professionals, Skyllen leverages progressive research and development methods to propel creative solutions into high-quality results.",
  },
  {
    name: "INNOVATION",
    page: 2,
    image: image3,
    textOne:
      "An enriched life stems from innovative planning and design. Skyllen works with clients to transform ideas into actuality. ",
    textTwo:
      "The firm’s dedication to early blueprinting sets the template for innovation, leading to conscientiously planned projects that radiate eminent design and modern experience.",
  },
];

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      {content.map((el) => (
        <Tile
          page={el.page}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkBleed progress={progress}>
                <ContentfulImage
                  height={1620}
                  quality={75}
                  src={el.image}
                  width={840}
                  // height={1620}
                  // alt='Pink Panda'
                />
              </WorkBleed>
              <WorkBleed progress={progress}>
<<<<<<< HEAD
                <div className="project-card-content w-screen">
=======
                <div className="project-card-content w-screen md:w-w-screen-1/2 md:p-16">
>>>>>>> parent of 8c2fe7e (Updating company pillars card)
                  <div className="justify-between flex flex-col h-5/6 md:h-full">
                    <div>
                      <h3>{el.name} </h3>
                      <span>-</span>
                    </div>
                    <div>
                      <p className="tracking-tight pb-8">{el.textOne}</p>
                      <p className="tracking-tight">{el.textTwo}</p>
                    </div>
                  </div>
                </div>
              </WorkBleed>
            </WorkContainer>
          )}
        ></Tile>
      ))}
    </TileContent>
  </TileWrapper>
);

export default Works;
