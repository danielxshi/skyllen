"use client";
import { useLocation } from "react-router-dom";

import PageSection from "@/app/components/page-section";
import ProjectGallery from "@/app/components/project-gallery";

import ContentfulImage from "@/lib/contentful-image";
import Headline from "@/app/components/headline";
import HCIMG from "../../../public/images/dec7/P7.webp";

import { Markdown } from "@/lib/markdown";
import Button from "@/app/components/Button/FillButton";
import {
  getAllPosts,
  getPostAndMorePosts,
  getPostAndMorePostsLocalized,
  getAllPostsLocalized,
} from "@/lib/api";
import localFont from "next/font/local";
import { getLocalizedMessages, getLocalizedProjects } from "@/src/i18n";
import { useRouter } from "next/router";
import Banner from "../banner";
import { usePathname } from "next/navigation";

const localizedMessages = getLocalizedMessages();
const PROJECT_PATHNAME_0 = "/posts/618-carnavron";
const PROJECT_PATHNAME_1 = "/posts/1650-on-second";
const PROJECT_PATHNAME_2 = "/posts/pendrell-street";

const montserratt = localFont({
  src: [
    {
      path: "../../fonts/montserrat/Montserrat-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Page() {
  // const location = useLocation();
  const location = usePathname();
  let url = location;
  var id = url.substring(url.lastIndexOf("/" + 1));

  const localizedProjects = getLocalizedProjects();
  let project;
  if (id == PROJECT_PATHNAME_0) {
    project = localizedProjects[0];
  } else if (id == PROJECT_PATHNAME_1) {
    project = localizedProjects[1];
  } else if (id == PROJECT_PATHNAME_2) {
    project = localizedProjects[2];
  } else project = localizedProjects[1];

  return (
    <>
      <Banner
        website={project.TYPE}
        title={project.TITLE}
        excerpt={project.EXCERPT}
        url={project.COVER_IMAGE}
      >
        <div className="md:flex md:w-full justify-between">
          <div className="md:mb-0 mb-8 flex flex-col">
            <span className={`mb-0 md:mb-8 font-bold ${montserratt.className}`}>
              {localizedMessages.PROJECT_DETAILS_STATUS}
            </span>
            <p>{project.STATUS}</p>
          </div>

          <div className="md:mb-0 mb-8 flex flex-col">
            <span className={`mb-0 md:mb-8 font-bold ${montserratt.className}`}>
              {localizedMessages.PROJECT_DETAILS_TYPE}
            </span>
            <p>{project.TYPE}</p>
          </div>

          <div className="md:mb-0 mb-8 flex flex-col">
            <span className={`mb-0 md:mb-8 font-bold ${montserratt.className}`}>
              {localizedMessages.PROJECT_DETAILS_LOCATION}
            </span>
            <p>{project.LOCATION}</p>
          </div>

          <div className="md:mb-0 mb-8 flex flex-col">
            <span className={`mb-0 md:mb-8 font-bold ${montserratt.className}`}>
              {localizedMessages.PROJECT_DETAILS_ESTIMATE}
            </span>
            <p>{project.ESTIMATE}</p>
          </div>

          <div
            className={`flex flex-col 
          ${project.COUNT}`}
          >
            <span className={`mb-4 md:mb-8 font-bold ${montserratt.className}`}>
              {localizedMessages.PROJECT_DETAILS_HOMES}
            </span>
            <p>{project.COUNT}</p>
          </div>
        </div>
      </Banner>

      <PageSection style={"container pb-16 pt-16"}>
        <h2 className="md:w-600">{project.PROJECT_DESCRIPTION}</h2>
        <div className="mt-4">
          <Button style={project.WEBSITE_BTN_STATE} url={project.WEBSITE}>
            {project.WEBSITE_TEXT}
          </Button>
        </div>
      </PageSection>

      <div className={`${project.HIDDEN_PROJECT}`}>
        <PageSection
          style={"container grid-container md:pb-16 pt-8 flex flex-col"}
        >
          <div className="flex h-full md:col-start-1 md:col-span-3 col-span-full flex-col md:pb-0 pb-8">
            <div className="w-full relative flex flex-col h-screen-3/4 ">
              <ContentfulImage
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="project image"
                src={project.PROJECT_IMAGE_ONE}
                fill={true}
              />
            </div>
          </div>

          <div className="flex md:col-start-5 md:col-span-3 flex-col col-span-full">
            <div className="md:mb-0 mb-4">
              <div className="w-full h-300 relative flex flex-col">
                <ContentfulImage
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="project image"
                  src={project.PROJECT_IMAGE_TWO}
                  fill={true}
                />
              </div>
            </div>

            <div className="mt-auto md:w-350">
              <p className="text-bubble-content">{project.BUBBLE_ONE}</p>
            </div>
          </div>
        </PageSection>

        <PageSection
          style={"container grid-container md:pb-16 pt-8 flex flex-col"}
        >
          <div className="flex h-full md:col-start-1 md:col-span-2 flex-col col-span-full pb-8 md:pb-0">
            <div className="mt-auto">
              <p className="text-bubble-content">{project.BUBBLE_TWO}</p>
            </div>
          </div>

          <div className="flex  md:col-start-4 md:col-span-4 pb-4 flex-col col-span-full">
            <div>
              <div className="w-full h-450 relative flex flex-col">
                <ContentfulImage
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={project.PROJECT_IMAGE_THREE}
                  fill={true}
                />
              </div>
            </div>
          </div>
        </PageSection>

        <PageSection
          style={"container grid-container md:pb-16 pt-4 flex flex-col"}
        >
          <div className="flex h-full md:col-start-1 md:col-span-3 flex-col col-span-full md:pb-0 pb-8">
            <div className="w-full relative flex flex-col h-screen-3/4 ">
              <ContentfulImage
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="project image"
                src={project.PROJECT_IMAGE_FOUR}
                fill={true}
              />
            </div>
          </div>

          <div className="flex  md:col-start-6 md:col-span-2 flex-col col-span-full">
            <div>
              <div className="w-full h-450 relative flex flex-col">
                <ContentfulImage
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="project image"
                  src={project.PROJECT_IMAGE_FIVE}
                  fill={true}
                />
              </div>
            </div>

            <div className="mt-auto pt-4">
              <p className="text-bubble-content">{project.BUBBLE_THREE}</p>
            </div>
          </div>
        </PageSection>
      </div>

      <PageSection style={"container py-16 md:py-32 flex flex-col"}>
        <div className="flex h-full relative w-11/12 m-auto">
          <div className="w-full h-fit ">
            <ContentfulImage
              alt="project image"
              src={project.RENDER}
              // fill={true}
              height={1200}
              width={1500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "fit" }}
            />
          </div>
        </div>
      </PageSection>

      <div className={`py-32 ${project.HIDE_CARE}`}>
        <PageSection
          style={`container flex md:pb-32  relative h-screen-3/4 relative w-full md:grid md:grid-cols-9 ${project.HOMEOWNER_CARE}`}
        >
          <div className="hover:cursor-pointer flex justify-center items-center h-full md:grid-start-1 md:col-span-5 relative">
            <ContentfulImage
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={HCIMG}
              alt="Family fun"
              quality={50}
              fill={true}
            />
          </div>

          <div
            className={`flex flex-col z-50 justify-center self-center m-auto w-full md:col-start-6 col-span-4 bg-ham-blue h-full w-full ${project.HOMEOWNER_CARE}`}
          >
            <div className="flex flex-col ">
              <h3 className="m-auto text-white mb-4">
                {project.HOME_OWNER_CARE_HEADER}
              </h3>
              <Button
                style="m-auto h-fit"
                url="
https://app.tribehome.com/developments/1446303707191840768/loop"
              >
                {project.HOMEOWNER_CARE_TEXT}
              </Button>
            </div>
          </div>
        </PageSection>
      </div>

      <PageSection style={"container pb-16 md:pb-32"}>
        <ProjectGallery />
      </PageSection>
    </>
  );
}
