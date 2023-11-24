import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import Landing from "./components/landing";
import ProjectGallery from "./components/project-gallery";
import PageSection from "./components/page-section";
import Headline from "./components/headline";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className=" ">
      <Landing />
      <PageSection style={"container min-h-screen pt-16 pb-16"}>
        <ProjectGallery />
      </PageSection>
      <PageSection style={"container min-h-screen pt-16 pb-16"}>
        <Headline
          overline="social media"
          title="Smart Design and Distinct Spaces"
        />
      </PageSection>
    </div>
  );
}
