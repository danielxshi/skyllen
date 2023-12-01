"use client";

import gsap from "gsap";
import Banner from "../components/banner";
import ProjectMessages from "../JSON/ProjectMessages";
import PageSection from "../components/page-section";
import Works from "./works";
import ProjectDescription from "./project-description";
import ContentfulImage from "@/lib/contentful-image";
import dallas from "@/app/images/dallas.webp";
import ParallaxBG from "../components/ParallaxBG";
import DescriptionImage1 from "../images/construction.webp";
import DescriptionImage2 from "../images/streetview.webp";
import headerBG from "../images/pendrell-aerial.webp";
import testImage from "@/public/images/1650-night.webp";
import ParallaxFooter from "../components/ParallaxFooter";
import Logo from "@/public/images/logo-landing.webp";
import localFont from "next/font/local";

const montserratt = localFont({
  src: [
    {
      path: "../fonts/montserrat/Montserrat-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});


const descriptions = [
  {
    image: DescriptionImage1,
    service: "PROJECT MANAGEMENT",
    paragraphOne:
      "Skyllen Pacific boasts years of experience managing detached residential, mixed-use, and commercial projects. ",
    paragraphTwo:
      "With hands-on experience from project inception to completion, Skyllen is well-informed with the entire development process and is qualified to provide relevant insight for all types of projects.",
  },

  {
    image: DescriptionImage2,
    service: "DEVELOPMENT",
    paragraphOne:
      "Our end-to-end service model moves projects from concept to completion, with our expert teams collaborating every step of the way. ",
    paragraphTwo:
      "Our winning formula lies in how our in-house experts work together. Our integrated systems move projects from concept to completion, delivering on the promise we make to our customers, every time.",
  },
];

export default function Page() {
  return (
    <>
      <ParallaxFooter url="https://i.imgur.com/EODCPWr.mp4">
        <Banner
          style="min-h-screen flex"
          title={ProjectMessages.CompanyTitle}
          overline="COMPANY"
        />
      </ParallaxFooter>
      <PageSection style="pt-16 pb-16 md:h-128 flex">
        <div className="grid-container m-auto container">
          <h3 className="col-start-1 col-span-full mb-8 md:col-start-2 md:col-span-3">
            Our History |
          </h3>
          <div className="content col-start-1 col-span-full md:col-start-5 md:col-span-3">
            <p className="pb-8">
              Since 2008, Skyllen Pacific has been active throughout Metro
              Vancouver observing market needs and acquiring lands in strategic
              parts of the region.{" "}
            </p>
            <p>
              With over thirty years of practiced expertise spanning across two
              continents, the Skyllen Group is committed to exceeding
              Vancouver's real estate development goals with quality homes that
              prioritize revolutionary design and thoughtful functionality.
            </p>
          </div>
        </div>
      </PageSection>
      <Works />
      <PageSection style="pb-16 ">
        <ParallaxBG
          style="company-parallax"
          url="https://i.imgur.com/EODCPWr.mp4"
        >
          <div className="grid-container m-auto container">
            <div className="col-start-1 col-span-full mb-8 md:col-start-2 md:col-span-3 flex">
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="loader--hero"
              > */}

              <div className="image-container">
                <ContentfulImage
                  src={Logo}
                  // width={48}
                  fill={true}
                  // height={48}
                  quality={85}
                />
              </div>
              {/* </motion.div> */}
            </div>
            <div className="content col-start-1 col-span-full md:col-start-5 md:col-span-3">
              <p className="pb-8">
                Since 2008, Skyllen Pacific has been active throughout Metro
                Vancouver observing market needs and acquiring lands in
                strategic parts of the region.{" "}
              </p>
              <p>
                With over thirty years of practiced expertise spanning across
                two continents, the Skyllen Group is committed to exceeding
                Vancouver's real estate development goals with quality homes
                that prioritize revolutionary design and thoughtful
                functionality.
              </p>
            </div>
          </div>
        </ParallaxBG>
      </PageSection>
      <PageSection style="h-min pt-16 pb-16 lrg-padding-top company-section">
        {descriptions.map((el) => (
          <div className="container grid-container company-service">
            <ProjectDescription
              key={el.service}
              paragraphOne={el.paragraphOne}
              paragraphTwo={el.paragraphTwo}
              title={el.service}
              style="md:mb-16 col-span-full md:col-start-1 md:col-end-4 "
            />
            <div className="col-start-1 md:col-start-5 md:col-span-4 relative col-span-full contentful-fill-container">
              <ContentfulImage
                fill={true}
                src={el.image}
                alt={"construction"}
                quality={50}
              />
            </div>
          </div>
        ))}
      </PageSection>
    </>
  );
}
