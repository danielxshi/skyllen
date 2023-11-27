// import { draftMode } from "next/headers";
// import { getAllPosts } from "@/lib/api";
import React from "react";
import Landing from "./components/landing";
import ProjectGallery from "./components/project-gallery";
import PageSection from "./components/page-section";
import Headline from "./components/headline";
import ScrollVideo from "./components/ScrollVideo/ScrollVideo";
import { SectionLayout } from "./components/SectionLayouts";

type Props = {};

const Page = (props: Props) => {
  // const { isEnabled } = draftMode();
  // const allPosts = await getAllPosts(isEnabled);
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);

  return (
    <div>
      <Landing />

      {/* <div></div> */}

      {/* <div className="min-h-screen w-full bg-white font-normal text-black"> */}
      {/* <PageSection style="min-h-screen">
        <div className="">
          <ScrollVideo
            src={{
              mp4: "https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4",
            }}
          />
        </div>
      </PageSection> */}
      {/* </div> */}

      <PageSection style={"container min-h-screen pt-16 pb-16"}>
        <ProjectGallery />
      </PageSection>
      <PageSection style={"container pt-16 pb-16"}>
        <Headline
          overline="social media"
          title="Smart Design and Distinct Spaces"
        />
      </PageSection>
    </div>
  );
};

export default Page;
