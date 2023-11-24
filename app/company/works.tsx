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
    name: "inspiration",
    page: 0,
    image: image1,
    textOne:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga. Sit ab, cupiditate possimus nisi nemo esse laboriosam libero, labore a iusto voluptatibus modi. Ipsa maiores tempore odit eius placeat?",
    textTwo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga. Sit ab, cupiditate possimus nisi nemo esse laboriosam libero, labore a iusto voluptatibus modi. Ipsa maiores tempore odit eius placeat?",
  },
  {
    name: "motivation",
    page: 1,
    image: image2,
    textOne:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga. Sit ab, cupiditate possimus nisi nemo esse laboriosam libero, labore a iusto voluptatibus modi. Ipsa maiores tempore odit eius placeat?",
    textTwo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga. Sit ab, cupiditate possimus nisi nemo esse laboriosam libero, labore a iusto voluptatibus modi. Ipsa maiores tempore odit eius placeat?",
  },
  {
    name: "determination",
    page: 2,
    image: image3,
    textOne:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga. Sit ab, cupiditate possimus nisi nemo esse laboriosam libero, labore a iusto voluptatibus modi. Ipsa maiores tempore odit eius placeat?",
    textTwo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fuga. Sit ab, cupiditate possimus nisi nemo esse laboriosam libero, labore a iusto voluptatibus modi. Ipsa maiores tempore odit eius placeat?",
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
                <div className="project-card-content">
                  <div className="justify-between h-3/4 flex flex-col">
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
