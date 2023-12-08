import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkBleed } from "./work";
import ContentfulImage from "@/lib/contentful-image";
import image1 from "../../public/images/dec7/_INSPIRATION-2.webp";
import image2 from "../../public/images/dec7/_COLLABORATION-2.webp";
import image3 from "../../public/images/dec7/_INNOVATION-2.webp";

import localFont from "next/font/local";
import { getLocalizedMessages } from "@/src/i18n";

const localizedMessages = getLocalizedMessages();

const montserrattBold = localFont({
  src: [
    {
      path: "../fonts/montserrat/Montserrat-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const content = [
  {
    name: localizedMessages.COMPANY_PILLAR_ONE_TITLE,
    page: 0,
    image: image1,
    textOne: localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_1,
    textTwo: localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2,
  },
  {
    name: localizedMessages.COMPANY_PILLAR_TWO_TITLE,

    page: 1,
    image: image2,
    textOne: localizedMessages.COMPANY_PILLAR_TWO_PARAGRAPH_1,
    textTwo: localizedMessages.COMPANY_PILLAR_TWO_PARAGRAPH_2,
  },
  {
    name: localizedMessages.COMPANY_PILLAR_THREE_TITLE,
    page: 2,
    image: image3,
    textOne: localizedMessages.COMPANY_PILLAR_THREE_PARAGRAPH_1,
    textTwo: localizedMessages.COMPANY_PILLAR_THREE_PARAGRAPH_2,
  },
];

const Works = ({ style }: { style?: string }) => (
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
                <div
                  className={`project-card-content w-screen md:p-16 md:px-5 md:w-w-screen-1/2 ${style}`}
                >
                  <div className="justify-between flex flex-col h-5/6 pt-16 md:pt-16 md:h-full content-container container">
                    <div>
                      <h3 className={` ${montserrattBold.className}`}>
                        {el.name}{" "}
                      </h3>
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
