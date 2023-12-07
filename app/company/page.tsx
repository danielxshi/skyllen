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
import DescriptionImage1 from "../../public/images/dec7/P4.webp";
import DescriptionImage2 from "../../public/images/dec7/P5.webp";
import headerBG from "../images/pendrell-aerial.webp";
import testImage from "@/public/images/1650-night.webp";
import ParallaxFooter from "../components/VideoParallax";
import Logo from "@/public/images/logo-landing.webp";
import localFont from "next/font/local";
import { getLocalizedMessages } from "@/src/i18n";

const localizedMessages = getLocalizedMessages();

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
    service: localizedMessages.COMPANY_PROJECT_MANAGEMENT_TITLE,
    paragraphOne: localizedMessages.COMPANY_PROJECT_MANAGEMENT_PARAGRAPH_1,
    paragraphTwo: localizedMessages.COMPANY_PROJECT_MANAGEMENT_PARAGRAPH_2,
  },

  {
    image: DescriptionImage2,
    service: localizedMessages.COMPANY_DEVELOPMENT_TITLE,
    paragraphOne: localizedMessages.COMPANY_DEVELOPMENT_PARAGRAPH_1,
    paragraphTwo: localizedMessages.COMPANY_DEVELOPMENT_PARAGRAPH_2,
  },
];

export default function Page() {
  return (
    <>
      <ParallaxFooter url={require("./train.gif")}>
        <Banner
          style="min-h-screen flex"
          // title={ProjectMessages.CompanyTitle}
          overline={localizedMessages.COMPANY_OVERLINE}
        >
          {/* We're a{" "}
          <strong className={` ${montserratt.className}`}>
            multi-disciplinary
          </strong>{" "}
          Real Estate development firm focusing on developing properties that
          connect{" "}
          <strong className={` ${montserratt.className}`}>Nature</strong>,{" "}
          <strong className={` ${montserratt.className}`}>Architecture</strong>,{" "}
          <strong className={` ${montserratt.className}`}>Technology</strong>,
          and{" "}
          <strong className={` ${montserratt.className}`}>Functionality</strong>
          . */}
          {localizedMessages.COMPANY_HEADER}
        </Banner>
      </ParallaxFooter>
      <PageSection style="pt-16 pb-16 md:h-128 flex">
        <div className="grid-container m-auto container">
          <h3 className="col-start-1 col-span-full mb-8 md:col-start-2 md:col-span-3">
            {localizedMessages.COMPANY_SECTION_TITLE}
          </h3>
          <div className="content col-start-1 col-span-full md:col-start-5 md:col-span-3">
            <p className="pb-8">
              {localizedMessages.COMPANY_SECTION_PARAGRAPH_1}
            </p>
            <p>{localizedMessages.COMPANY_SECTION_PARAGRAPH_2}</p>
          </div>
        </div>
      </PageSection>
      <Works style="bg-white text-black" />

      <PageSection style="pb-16 ">
        <ParallaxFooter style="company-parallax" url={require("./train.gif")}>
          <div className="grid-container m-auto container md:py-16 py-8">
            <div className="col-start-1 col-span-full mb-8 md:col-start-2 md:col-span-3 flex">
              <div className="image-container relative">
                <ContentfulImage src={Logo} fill={true} quality={85} />
              </div>
            </div>
            <div className="content col-start-1 col-span-full md:col-start-5 md:col-span-3 text-white">
              <p className="pb-8">
                {localizedMessages.COMPANY_SECTION_PARAGRAPH_1}
              </p>
              <p>{localizedMessages.COMPANY_SECTION_PARAGRAPH_2}</p>
            </div>
          </div>
        </ParallaxFooter>
      </PageSection>

      <PageSection style="h-min pt-16 pb-16 md:pb-32 lrg-padding-top company-section">
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
