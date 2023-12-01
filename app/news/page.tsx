"use client";

import ParallaxBG from "../components/ParallaxBG";
import ProjectMessages from "../JSON/ProjectMessages";
import Banner from "../components/banner";
import PageSection from "../components/page-section";
import Headline from "../components/headline";
import ContentfulImage from "@/lib/contentful-image";
import bgBanner from "../images/news.webp";


const NewsContent = [
  {
    // url: "/posts/cool-dogs",
    name: "1650 ON SECOND",
    date: "00.00.00",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, esse debitis perspiciatis maiores cumque sapiente quidem quos dolorem, libero tempore velit. At excepturi facilis assumenda, natus doloribus eius ipsam amet.",
    image: "https://i.imgur.com/7WOEPhU.jpeg",
  },
  {
    // url: "/posts/cool-dogs",
    name: "618 CARNAVRON",
    date: "00.00.00",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, esse debitis perspiciatis maiores cumque sapiente quidem quos dolorem, libero tempore velit. At excepturi facilis assumenda, natus doloribus eius ipsam amet.",
    image:
      "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    // url: "/posts/cool-dogs",
    name: "PENDRELL ST",
    date: "00.00.00",
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
        <li className="mb-16 news-content-container col-span-full md:col-span-4">
          <div className="relative w-full image-container">
            <ContentfulImage
              src="https://images.pexels.com/photos/3639003/pexels-photo-3639003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Pink Panda"
              fill={true}
            />
          </div>
          <div className="mt-4">
            <div className="mb-4">
              <p>{el.date}</p>
              <h3 className="underline underline-offset-4">{el.name}</h3>
            </div>
            <p>{el.excerpt}</p>
          </div>
        </li>
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
          title={ProjectMessages.CompanyTitle}
          overline="COMPANY"
        />
      </ParallaxBG>

      <PageSection style="container pt-16 pb-16">
        <Headline overline="news" title="Stay updated with Skyllen" />
        <NewsGalleryItem />
      </PageSection>
    </>
  );
}
