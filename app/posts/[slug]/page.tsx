import Link from "next/link";
import { draftMode } from "next/headers";

import MoreStories from "../../more-stories";
import Avatar from "../../avatar";
import Date from "../../date";
import CoverImage from "../../cover-image";
import Banner from "../banner";
import PageSection from "@/app/components/page-section";
import ProjectGallery from "@/app/components/project-gallery";
import { WorkBackground, WorkContainer, WorkBleed } from "../../company/work";
import ContentfulImage from "@/lib/contentful-image";
import Image from "next/image";

import dallas from "./d2allas.webp";


import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Extract post from main function
function postDetails() {
  return <></>;
}

const baseUrl = "";


export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  // Data from Contentful
  let dataKeys = Object.keys(post.projectDetails["images"]);
  let dataValue = Object.values(post.projectDetails["images"]);
  let dataValue2 = Object.values(post.projectDetails);

  console.log(post.projectDetails);
  console.log(post.projectDetails["images"]);

  console.log(dataValue);
  // console.log(dataKeys);

  return (
    <>
      <Banner website={""} title={post.title} excerpt={post.excerpt}>
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <span className="mb-8 font-bold">Status</span>
            <p>{post.projectDetails["status"]}</p>
          </div>

          <div className="flex flex-col">
            <span className="mb-8 font-bold">Type</span>
            <p>{post.projectDetails["type"]}</p>
          </div>

          <div className="flex flex-col">
            <span className="mb-8 font-bold">Location</span>
            <p>{post.projectDetails["location"]}</p>
          </div>

          <div className="flex flex-col">
            <span className="mb-8 font-bold">Estimated Completion</span>
            <p>{post.projectDetails["estimate"]}</p>
          </div>

          <div className="flex flex-col">
            <span className="mb-8 font-bold">Homes</span>
            <p>{post.projectDetails["count"]}</p>
          </div>
        </div>
      </Banner>

      <PageSection style={"container pb-16 flex"}>
        <div className="flex w-full flex-col project-content-map-container">
          {dataValue.map((item, index) => (
            <li className="flex mb-16">
              <div key={index} className="content pr-16 w-1/2">
                <ContentfulImage
                  height={400}
                  // quality={75}
                  // src={dallas}
                  // src={require("./dallas.webp")}
                  src={require("" + item)}
                  // src={JSON.stringify(item)}
                  width={500}
                  // height={1620}
                  alt="Pink Panda"
                />
              </div>
              <div className="w-1/2">
                <div className="content px-16">
                  {/* <p>{JSON.stringify(item)}</p>
                  <p>{baseUrl + item}</p> */}
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non praesentium provident quas id deserunt rem ex. Atque ab, soluta id pariatur numquam aperiam quidem dicta officiis distinctio. Libero, recusandae.</p>
                </div>
              </div>
            </li>
          ))}
        </div>
      </PageSection>
      <PageSection style={"container min-h-screen pt-16 pb-16"}>
        <ProjectGallery />
      </PageSection>
    </>
  );
}
