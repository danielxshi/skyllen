"use client"
import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import Landing from "./components/landing";
import ProjectGallery from "./components/project-gallery";
import PageSection from "./components/page-section";
import Headline from "./components/headline";
import React, { useRef, useEffect } from "react";
import SocialGallery from "./components/SocialGallery";
import ScrollParallaxVideo from "./components/ScrollVideo/ScrollParallaxVideo";
import { getLocalizedMessages } from "@/src/i18n";

export default function Page() {
  // const { isEnabled } = draftMode();
  const localizedMessages = getLocalizedMessages();

  return (
    <div className="">
      <Landing />
      <PageSection style={"h-fit pb-16"}>
        <ScrollParallaxVideo />
      </PageSection>
      <PageSection style={"container min-h-screen pt-16 pb-16"}>
        <ProjectGallery>
          <Headline
            overline={localizedMessages.PROJECT_GALLERY_OVERLINE}
            title={localizedMessages.PROJECT_GALLERY_HEADLINE}
          />
        </ProjectGallery>
      </PageSection>
      <PageSection style={"container pt-16 md:pb-32 pb-16 "}>
        <SocialGallery />
      </PageSection>
    </div>
  );
}
