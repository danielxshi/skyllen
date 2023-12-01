import { draftMode } from "next/headers";

import Banner from "../banner";
import PageSection from "@/app/components/page-section";
import ProjectGallery from "@/app/components/project-gallery";

import ContentfulImage from "@/lib/contentful-image";
import Headline from "@/app/components/headline";

import { Markdown } from "@/lib/markdown";
import Button from "@/app/components/Button/FillButton";
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
  console.log("test" + post.projectDetails["status"]);
  console.log("test");

  const test = post.projectDetails["status"];

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

      <PageSection style={"container pb-16 pt-16"}>
        <h2 className="w-600">{post.projectPreviewDescription}</h2>
        <div className="mt-4">
          <Button url={post.website}>VISIT THE WEBSITE</Button>
        </div>
      </PageSection>

      <div className={post.projectDetails["state"]}>
        <PageSection
          style={"container grid-container pb-16 pt-16 flex flex-col"}
        >
          {/* <p>{JSON.stringify(post.projectDetails["cool"])}</p> */}
          <div className="flex h-full md:col-start-1 md:col-span-3 flex-col">
            <div className="w-full relative flex flex-col h-screen-3/4 ">
              <ContentfulImage src={post.projectImageOne?.url} fill={true} />
            </div>
            <p className="mt-4 sub">{post.projectImageOneText}</p>
          </div>

          <div className="flex  md:col-start-5 md:col-span-3 flex-col">
            <div>
              <div className="w-full h-300 relative flex flex-col">
                <ContentfulImage src={post.projectImageTwo?.url} fill={true} />
              </div>
              <p className="mt-4 sub">{post.projectImageTwoText}</p>
            </div>

            <div className="mt-auto">
              <p>{post.projectTextBubbleOne}</p>
            </div>
          </div>
        </PageSection>

        <PageSection
          style={"container grid-container pb-16 pt-16 flex flex-col"}
        >
          <div className="flex h-full md:col-start-1 md:col-span-2 flex-col">
            <div className="mt-auto">
              <p>{post.projectTextBubbleTwo}</p>
            </div>
            <p className="mt-4 sub">{post.projectImageTwoText}</p>
          </div>

          <div className="flex  md:col-start-4 md:col-span-4 flex-col">
            <div>
              <div className="w-full h-450 relative flex flex-col">
                <ContentfulImage
                  src={post.projectImageThree?.url}
                  fill={true}
                />
              </div>
              <p className="mt-4 sub">{post.projectImageThreeText}</p>
            </div>
          </div>
        </PageSection>

        <PageSection
          style={"container grid-container pb-16 pt-16 flex flex-col"}
        >
          <div className="flex h-full md:col-start-1 md:col-span-3 flex-col">
            <div className="w-full relative flex flex-col h-screen-3/4 ">
              <ContentfulImage src={post.projectImageFour?.url} fill={true} />
            </div>
            <p className="mt-4 sub">{post.projectImageFourText}</p>
          </div>

          <div className="flex  md:col-start-6 md:col-span-2 flex-col">
            <div>
              <div className="w-full h-450 relative flex flex-col">
                <ContentfulImage src={post.projectImageFive?.url} fill={true} />
              </div>
              <p className="mt-4 sub">{post.projectImageFiveText}</p>
            </div>

            <div className="mt-auto">
              <p>{post.projectTextBubbleThree}</p>
            </div>
          </div>
        </PageSection>
      </div>

      {/* <PageSection style={"container pb-16 pt-16 flex flex-col"}>
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
                  </p>
                </div>
              </div>
            </li>
          ))}
        </div>
      </PageSection> */}

      <PageSection style={"container pb-16 pt-16 flex flex-col"}>
        <div className="flex h-full relative w-11/12 m-auto">
          <div className="w-full h-screen-3/4 ">
            <ContentfulImage src={post.coverImage.url} fill={true} />
          </div>
        </div>
        <p className="mt-4 sub m-auto">{post.excerpt}</p>
      </PageSection>
      <PageSection style={"footer-gap container min-h-screen pt-16 pb-16"}>
        <ProjectGallery />
      </PageSection>
    </>
  );
}
