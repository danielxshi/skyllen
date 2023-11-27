"use client";
import ScrollVideo from "../components/ScrollVideo/ScrollVideo";

import { AnimationConfig } from "@/app/util/AnimationConfig";
import { SectionLayout } from "@/app/components/SectionLayouts";
import { ScrollTrigger } from "gsap/all";
import { useScroll, useMotionValueEvent, MotionValue } from "framer-motion";
import gsap from "gsap";
import React, {
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import StickyContainer from "../components/ScrollContainer/StickyContainer";

// type Props = {};

export default function Page() {
  gsap.registerPlugin(ScrollTrigger);
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const [hasScrolled, setHasScrolled] = useState(false);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "video",
      start: "top top",
      end: "bottom+=200% bottom",
      scrub: true,
      markers: true,
    },
  });

  interface ScrollContextInfo {
    scrollWidth: number;
    scrollHeight: number;
    scrollEnd: number;
    scrollX: MotionValue;
    scrollY: MotionValue;
    targetScrollY: MotionValue;
    scrollXProgress: MotionValue;
    scrollYProgress: MotionValue;
    documentOffsetY: MotionValue;
    // scrollDirection: ScrollDirection;
    // setCanScroll: Dispatch<SetStateAction<boolean>>;
    scrollContainerRef: MutableRefObject<HTMLDivElement>;
    refreshDocumentMeasurement: () => void;
    isUsingSmoothScroll: boolean;
    scrollTo: (target: number, smooth?: boolean) => void;
    canScroll: boolean;
    hasScrolled: boolean;
  }

  //   useMotionValueEvent(scrollY, "change", (latest) => {
  //     if (latest > 10) {

  //       // console.log("has scrolled")
  //       setHasScrolled(true);
  //       return;
  //     }
  //     setHasScrolled(false);
  //   });

  //   videoRef.onloadedmetadata = function () {
  tl.to(videoRef, { currentTime: videoRef.current });
//   console.log("log" + videoRef.current.duration);
  //   };

  return (
    <>
      <video
        className="video"
        // playsinline="true"
        webkit-playsinline="true"
        preload="auto"
        // muted="muted"
        ref={videoRef}
      >
        <source
          src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
