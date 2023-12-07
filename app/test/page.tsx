"use client";
// import { draftMode } from "next/headers";
import { Route, Link, Routes, useLocation } from "react-router-dom";

import Banner from "../posts/banner";
import PageSection from "@/app/components/page-section";
import ProjectGallery from "@/app/components/project-gallery";

import ContentfulImage from "@/lib/contentful-image";
import Headline from "@/app/components/headline";

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

const localizedMessages = getLocalizedMessages();
const PROJECT_PATHNAME_0 = "/posts/618-carnavron";
const PROJECT_PATHNAME_1 = "/posts/1650-on-second";
const PROJECT_PATHNAME_2 = "/posts/pendrell-street";


const montserratt = localFont({
  src: [
    {
      path: "../fonts/montserrat/Montserrat-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Page() {
  const location = useLocation();
  // console.log("cool " + location.pathname);

  const localizedProjects = getLocalizedProjects();
  let project;
  if (location.pathname == PROJECT_PATHNAME_0)
    project = localizedProjects[0];
  else if (location.pathname == PROJECT_PATHNAME_1)
    project = localizedProjects[1];
  else if (location.pathname == PROJECT_PATHNAME_2)
    project = localizedProjects[2];
  else 
    project = localizedProjects[0];

  //   const test = post.projectDetails["status"];

  // Data from Contentful
  //   let dataKeys = Object.keys(post.projectDetails["images"]);
  //   let dataValue = Object.values(post.projectDetails["images"]);
  //   let dataValue2 = Object.values(post.projectDetails);
  return (
    <>
      {/* <h1>test</h1> */}
      <Banner
        website={localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
        title={project.TITLE}
        excerpt={project.EXCERPT}
        url={project.COVER_IMAGE}
      >
        <div className="md:flex md:w-full justify-between">
          <div className="flex flex-col">
            <span className={`mb-8 font-bold ${montserratt.className}`}>
              Status
            </span>
            <p>{project.STATUS}</p>
          </div>

          <div className="flex flex-col">
            <span className={`mb-8 font-bold ${montserratt.className}`}>
              Type
            </span>
            <p>{project.TYPE}</p>
          </div>

          <div className="flex flex-col">
            <span className={`mb-8 font-bold ${montserratt.className}`}>
              Location
            </span>
            <p>{project.LOCATION}</p>
          </div>

          <div className="flex flex-col">
            <span className={`mb-8 font-bold ${montserratt.className}`}>
              Estimated Completion
            </span>
            <p>{project.ESTIMATE}</p>
          </div>

          {/* display NONE the class name should be "hidden" */}
          {/* <div className={`flex flex-col 
          ${post.projectDetails["count"]}`
        }
          >
            <span className={`mb-8 font-bold ${montserratt.className}`}>
              Homes
            </span>
            <p>{localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}</p>
          </div> */}
        </div>
      </Banner>

      <PageSection style={"container pb-16 pt-16"}>
        <h2 className="md:w-600">
          {localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
        </h2>
        <div className="mt-4">
          <Button url={localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}>
            VISIT THE WEBSITE
          </Button>
        </div>
      </PageSection>

      <div className={localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}>
        <PageSection
          style={"container grid-container md:pb-16 pt-16 flex flex-col"}
        >
          <div className="flex h-full md:col-start-1 md:col-span-3 col-span-full flex-col md:pb-0 pb-16">
            <div className="w-full relative flex flex-col h-screen-3/4 ">
              <ContentfulImage
                src={localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
                fill={true}
              />
            </div>
            <p className="mt-4 sub">
              {localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
            </p>
          </div>

          <div className="flex  md:col-start-5 md:col-span-3 flex-col col-span-full">
            <div>
              <div className="w-full h-300 relative flex flex-col">
                <ContentfulImage
                  src={localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
                  fill={true}
                />
              </div>
              <p className="mt-4 sub">
                {localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
              </p>
            </div>

            <div className="mt-auto w-300">
              <p className="text-bubble-content">
                {localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
              </p>
            </div>
          </div>
        </PageSection>

        <PageSection
          style={"container grid-container md:pb-16 pt-16 flex flex-col"}
        >
          <div className="flex h-full md:col-start-1 md:col-span-2 flex-col col-span-full pb-16 md:pb-0">
            <div className="mt-auto">
              <p className="text-bubble-content">
                {localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
              </p>
            </div>
          </div>

          <div className="flex  md:col-start-4 md:col-span-4 flex-col col-span-full">
            <div>
              <div className="w-full h-450 relative flex flex-col">
                <ContentfulImage
                  src={localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
                  fill={true}
                />
              </div>
              <p className="mt-4 sub">
                {localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
              </p>
            </div>
          </div>
        </PageSection>

        <PageSection
          style={"container grid-container md:pb-16 pt-16 flex flex-col"}
        >
          <div className="flex h-full md:col-start-1 md:col-span-3 flex-col col-span-full md:pb-0 pb-16">
            <div className="w-full relative flex flex-col h-screen-3/4 ">
              <ContentfulImage
                src={localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
                fill={true}
              />
            </div>
            <p className="mt-4 sub">
              {localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
            </p>
          </div>

          <div className="flex  md:col-start-6 md:col-span-2 flex-col col-span-full">
            <div>
              <div className="w-full h-450 relative flex flex-col">
                <ContentfulImage
                  src={localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
                  fill={true}
                />
              </div>
              <p className="mt-4 sub">
                {localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-bubble-content">
                {localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
              </p>
            </div>
          </div>
        </PageSection>
      </div>

      <PageSection style={"container md:pb-16 pt-16 flex flex-col"}>
        <div className="flex h-full relative w-11/12 m-auto">
          <div className="w-full h-screen-3/4 ">
            <ContentfulImage
              src={localizedMessages.COMPANY_PILLAR_ONE_PARAGRAPH_2}
              fill={true}
            />
          </div>
        </div>
      </PageSection>
      <PageSection style={"container min-h-screen pt-16 pb-16 md:pb-32"}>
        <ProjectGallery />
      </PageSection>
    </>
  );
}
