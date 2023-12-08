"use client";

import ParallaxBG from "../components/ParallaxBG";
import ProjectMessages from "../JSON/ProjectMessages";
import Banner from "../components/banner";
import PageSection from "../components/page-section";
import Headline from "../components/headline";
import ContentfulImage from "@/lib/contentful-image";
import bgBanner from "../images/news.webp";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

const NewsContent = [
  {
    // url: "/posts/cool-dogs",
    name: "1650 ON SECOND",
    date: "12.15.23",
    url: "/article/1650-on-second-news",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, esse debitis perspiciatis maiores cumque sapiente quidem quos dolorem, libero tempore velit. At excepturi facilis assumenda, natus doloribus eius ipsam amet.",
    image: "../images/dallas.webp",
  },
  {
    // url: "/posts/cool-dogs",
    name: "618 CARNAVRON",
    date: "12.16.23",

    url: "/article/618-carnavron-news",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, esse debitis perspiciatis maiores cumque sapiente quidem quos dolorem, libero tempore velit. At excepturi facilis assumenda, natus doloribus eius ipsam amet.",
    image:
      "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    // url: "/posts/cool-dogs",
    name: "EDITION",
    date: "12.17.23",
    url: "/article/pendrell-news",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, esse debitis perspiciatis maiores cumque sapiente quidem quos dolorem, libero tempore velit. At excepturi facilis assumenda, natus doloribus eius ipsam amet.",
    image:
      "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function NewsGalleryItem() {
  return (
    <ul className="news-gallery-container grid-container">
      {NewsContent.map((el) => (
        <div className="overflow-hidden mb-16 news-content-container col-span-full md:col-span-4">
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 1 },
            }}
            className="img-content"
          >
            <Link href={el.url}>
              <li className="">
                <div className="relative w-full image-container">
                  <ContentfulImage
                    src={el.image}
                    alt="Pink Panda"
                    fill={true}
                  />
                </div>
              </li>
            </Link>
          </motion.div>
          <div className="mt-4">
            <div className="mb-4">
              <Link href={el.url}>
                <p>{el.date}</p>
                <h3 className="underline underline-offset-4">{el.name}</h3>
              </Link>
            </div>
            <p>{el.excerpt}</p>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <ParallaxBG url="https://i.imgur.com/p1QJ3xJ.jpg">
        <Banner
          style="min-h-screen flex"
          // title={ProjectMessages.CompanyTitle}
          overline={localizedMessages.NEWS_HEADER_OVERLINE}
        >
          {/* We are inspired by the{" "}
          <strong className={` ${montserrattBold.className}`}>
            evolving interpretations
          </strong>{" "}
          of{" "}
          <strong className={` ${montserrattBold.className}`}>urbanity</strong>{" "}
          and{" "}
          <strong className={` ${montserrattBold.className}`}>
            sustainability
          </strong>{" "}
          emerging from recent cityscapes. */}
          {localizedMessages.NEWS_HEADER}

        </Banner>
      </ParallaxBG>

      <PageSection style="container pt-16 pb-16 md:pb-32">
        <Headline overline={localizedMessages.NEWS_SECTION_OVERLINE} title={localizedMessages.NEWS_SECTION_TITLE} />
        <NewsGalleryItem />
      </PageSection>
    </>
  );
}
