import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import Landing from "./components/landing";
import ProjectGallery from "./components/project-gallery";
import PageSection from "./components/page-section";
import Headline from "./components/headline";
import React, { useRef, useEffect } from "react";
import SocialGallery from "./components/SocialGallery";
import ScrollParallaxVideo from "./components/ScrollVideo/ScrollParallaxVideo";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="">
      <Landing />
      <PageSection style={"h-fit pb-16"}>
        <ScrollParallaxVideo />
      </PageSection>
      <PageSection style={"container min-h-screen pt-16 pb-16"}>
        <ProjectGallery>
          <Headline
            overline="our projects"
            title="Smart Design and Distinct Spaces"
          />
        </ProjectGallery>
      </PageSection>
      <PageSection style={"container pt-16 md:pb-52 pb-16 "}>
        <SocialGallery />
      </PageSection>
    </div>
  );
}
