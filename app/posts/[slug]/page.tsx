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
import Headline from "@/app/components/headline";

import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

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


  return (
    <>
      <Banner
        website=""
        title={post.title}
        excerpt={post.excerpt}
        url={post.coverImage.url}
      >
        <div className="md:flex md:w-full justify-between">
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

      <PageSection style={"container pb-16 pt-16 flex flex-col"}>
        <div className="flex h-full w-full relative">
          <div className="w-full h-screen-3/4 ">
            <ContentfulImage src={post.coverImage.url} fill={true} />
          </div>
        </div>
        <p className="mt-4">{post.excerpt}</p>
      </PageSection>

      <PageSection style={"container pb-16 pt-16 flex flex-col"}>
        <Headline title={post.excerpt} overline={post.title} />
        <div className="flex w-full flex-col project-content-map-container">
          {dataValue.map((item, index) => (
            <li className="flex mb-16 flex-col md:flex-row">
              <div key={index} className="content w-full md:pr-16 md:w-1/2">
                <ContentfulImage
                  height={400}
                  src={require("" + item)}
                  alt="Pink Panda"
                />
              </div>
              <div className="md:w-1/2 ">
                <div className="content w-full mt-4 md:mt-0 md:px-16 max-w-xl">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum non praesentium provident quas id deserunt rem ex.
                    Atque ab, soluta id pariatur numquam aperiam quidem dicta
                    {/* officiis distinctio. Libero, recusandae. */}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </div>
      </PageSection>
      <PageSection style={"footer-gap container min-h-screen pt-16 pb-16"}>
        <ProjectGallery />
      </PageSection>
    </>
  );
}
