import { draftMode } from "next/headers";

import Banner from "../banner";
import PageSection from "@/app/components/page-section";
import ProjectGallery from "@/app/components/project-gallery";

import ContentfulImage from "@/lib/contentful-image";
import Headline from "@/app/components/headline";

import { Markdown } from "@/lib/markdown";
import Button from "@/app/components/Button/FillButton";
import { getAllPosts, getPostAndMorePosts, getPostAndMorePostsLocalized, getAllPostsLocalized } from "@/lib/api";
import localFont from "next/font/local";

const montserratt = localFont({
  src: [
    {
      path: "../../fonts/montserrat/Montserrat-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

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
  const { post, morePosts } = await getPostAndMorePostsLocalized(false, params.slug, isEnabled);
  
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
            <span className={`mb-8 font-bold ${montserratt.className}`}>
              Status
            </span>
            <p>{post.projectDetails["status"]}</p>
          </div>

          <div className="flex flex-col">
            <span className={`mb-8 font-bold ${montserratt.className}`}>
              Type
            </span>
            <p>{post.projectDetails["type"]}</p>
          </div>

          <div className="flex flex-col">
            <span className={`mb-8 font-bold ${montserratt.className}`}>
              Location
            </span>
            <p>{post.projectDetails["location"]}</p>
          </div>

          <div className="flex flex-col">
            <span className={`mb-8 font-bold ${montserratt.className}`}>
              Estimated Completion
            </span>
            <p>{post.projectDetails["estimate"]}</p>
          </div>

          <div className={`flex flex-col ${post.projectDetails["count"]}`}>
            <span className={`mb-8 font-bold ${montserratt.className}`}>
              Homes
            </span>
            <p>{post.projectDetails["count"]}</p>
          </div>
        </div>
      </Banner>

      <PageSection style={"container pb-16 pt-16"}>
        <h2 className="md:w-600">{post.projectPreviewDescription}</h2>
        <div className="mt-4">
          <Button url={post.website}>VISIT THE WEBSITE</Button>
        </div>
      </PageSection>

      <div className={post.projectDetails["state"]}>
        <PageSection
          style={"container grid-container md:pb-16 pt-16 flex flex-col"}
        >
          <div className="flex h-full md:col-start-1 md:col-span-3 col-span-full flex-col md:pb-0 pb-16">
            <div className="w-full relative flex flex-col h-screen-3/4 ">
              <ContentfulImage src={post.projectImageOne?.url} fill={true} />
            </div>
            <p className="mt-4 sub">{post.projectImageOneText}</p>
          </div>

          <div className="flex  md:col-start-5 md:col-span-3 flex-col col-span-full">
            <div>
              <div className="w-full h-300 relative flex flex-col">
                <ContentfulImage src={post.projectImageTwo?.url} fill={true} />
              </div>
              <p className="mt-4 sub">{post.projectImageTwoText}</p>
            </div>

            <div className="mt-auto w-300">
              <p className="text-bubble-content">
                {post.projectTextBubbleFour}
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
                {post.projectTextBubbleFive}
              </p>
            </div>
          </div>

          <div className="flex  md:col-start-4 md:col-span-4 flex-col col-span-full">
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
          style={"container grid-container md:pb-16 pt-16 flex flex-col"}
        >
          <div className="flex h-full md:col-start-1 md:col-span-3 flex-col col-span-full md:pb-0 pb-16">
            <div className="w-full relative flex flex-col h-screen-3/4 ">
              <ContentfulImage src={post.projectImageFour?.url} fill={true} />
            </div>
            <p className="mt-4 sub">{post.projectImageFourText}</p>
          </div>

          <div className="flex  md:col-start-6 md:col-span-2 flex-col col-span-full">
            <div>
              <div className="w-full h-450 relative flex flex-col">
                <ContentfulImage src={post.projectImageFive?.url} fill={true} />
              </div>
              <p className="mt-4 sub">{post.projectImageFiveText}</p>
            </div>

            <div className="mt-auto">
              <p className="text-bubble-content">{post.projectTextBubbleSix}</p>
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

      <PageSection style={"container md:pb-16 pt-16 flex flex-col"}>
        <div className="flex h-full relative w-11/12 m-auto">
          <div className="w-full h-screen-3/4 ">
            <ContentfulImage src={post.render.url} fill={true} />
          </div>
        </div>
      </PageSection>
      <PageSection style={"container min-h-screen pt-16 pb-16 md:pb-32"}>
        <ProjectGallery />
      </PageSection>
    </>
  );
}
