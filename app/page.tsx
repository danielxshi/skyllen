import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import Landing from "./components/landing";
import ProjectGallery from "./components/project-gallery";
import PageSection from "./components/page-section";
import Headline from "./components/headline";
import React, { useRef, useEffect } from "react";
import SocialGallery from "./components/SocialGallery";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className=" ">
      <Landing />

      <PageSection style={"container min-h-screen pt-16 pb-16 relative"}>
        <div id="set-height"></div>
        <p id="time"></p>
        <video id="v0" tabindex="0" autobuffer="autobuffer" preload="preload">
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
          ></source>
        </video>
      </PageSection>
      <PageSection style={"container min-h-screen pt-16 pb-16"}>
        <ProjectGallery />
      </PageSection>
      <PageSection style={"container pt-16 pb-16 "}>
        <SocialGallery />
      </PageSection>
    </div>
  );
}
