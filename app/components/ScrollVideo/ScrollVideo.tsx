import React, {
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useContainerScroll } from "../ScrollContainer/ScrollContainer";
import StickyContainer, {
  useStickyContainerBounds,
} from "../ScrollContainer/StickyContainer";
import { useBoundingBox } from "@/hooks/useBoundingBox";
import { useWindowDimension } from "@/hooks/useWindowDimension";
import { clamp, motion, useMotionValue, useTransform } from "framer-motion";
import Sticky from "../ScrollContainer/Sticky";
import { AnimationConfig } from "../AnimationConfig";

import test from "./"

type Props = {
  playbackConst?: number;
  src: {
    webm: string;
    mp4: string;
    webmVp9: string;
  };
};

const ScrollVideo = ({ playbackConst = 150, src }: Props) => {
  const { scrollY, refreshDocumentMeasurement, scrollHeight } =
    useContainerScroll();
  const [videoScrollDistance, setVideoScrollDistance] = useState(0);

  // const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const containerBound = useStickyContainerBounds();
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  // const [videoRef, videoBounds] = useBoundingBox<HTMLVideoElement>([]);
  const videoFrame = useRef(0);
  const [isScrubbingVideo, setIsScrubbingVideo] = useState(false);
  const windowDim = useWindowDimension();

  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const scrollStartPosition = containerBound.top;
    const videoScrollDistance = containerBound.bottom - scrollStartPosition;

    const cancel = scrollY.on("change", (v) => {
      const timeProgress = (v - scrollStartPosition) / videoScrollDistance;
      scrollProgress.set(timeProgress);

      const timeProgressClamped = clamp(0, 1, timeProgress);

      videoFrame.current =
        timeProgressClamped * Math.floor(videoRef.current.duration);

      if (timeProgress > 0 && timeProgress < 1) {
        setIsScrubbingVideo(true);
      } else {
        setIsScrubbingVideo(false);
      }
    });
    return () => cancel();
  }, [containerBound, windowDim.height, scrollProgress]);

  useEffect(() => {
    let animFrame = 0;
    let prevFrameRounded = 0;
    const updateFrame = () => {
      if (!videoFrame.current) {
        animFrame = requestAnimationFrame(updateFrame);
        return;
      }
      // videoRef.current.fastSeek(videoFrame.current);

      // round current frame to 0.0
      const currentFrameRounded = Math.round(videoFrame.current * 10) / 10;
      const updateThreshold = 0.1;

      // only update frame when it is more than a specific delta
      if (Math.abs(currentFrameRounded - prevFrameRounded) > updateThreshold) {
        videoRef.current.currentTime = currentFrameRounded;
      }
      prevFrameRounded = currentFrameRounded;

      animFrame = requestAnimationFrame(updateFrame);
    };

    // only update to the last or first frame
    if (!isScrubbingVideo) {
      updateFrame();
      return;
    }

    animFrame = requestAnimationFrame(updateFrame);

    return () => cancelAnimationFrame(animFrame);
  }, [isScrubbingVideo]);

  useEffect(() => {
    requestAnimationFrame(() => videoRef.current.pause());
  }, []);

  const handleMetaDataLoaded = () => {
    setVideoScrollDistance(
      Math.floor(videoRef.current.duration) * playbackConst,
    );
  };

  useEffect(() => {
    videoRef.current.load();
  }, [videoRef]);

  useEffect(() => {
    refreshDocumentMeasurement();
  }, [videoScrollDistance]);

  const scale = useTransform(scrollProgress, [0, 1], [2, 2]);
  const pos = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [-windowDim.width / 3, -windowDim.width / 4, 0],
  );

  const isLandscape = useMemo(
    () => windowDim.width > windowDim.height,
    [windowDim],
  );

  const videoScale = useTransform(scale, (latest) => {
    if (isLandscape) {
      return 1.05;
    }
    return latest;
  });

  const videoPos = useTransform(pos, (latest) => {
    if (isLandscape) {
      return 0;
    }
    return latest;
  });

  return (
    <div
      style={{
        height: videoScrollDistance,
      }}
      className="flex flex-col items-start"
    >
      <Sticky top={"0px"}>
        <motion.video
          onLoadedMetadata={handleMetaDataLoaded}
          //@ts-ignore
          autobuffer="autobuffer"
          preload="preload"
          ref={videoRef}
          // src="../../../public/about/Homepage_1.mp4"
          // src="../../../public/about/about-intro-video-old-2.mp4"
          loop
          muted
          autoPlay
          className="h-[100vh] w-[100vw]"
          style={{
            zIndex: -1000,
            scale: videoScale,
            x: videoPos,
            objectFit: isLandscape ? "cover" : "contain",
            objectPosition: isLandscape ? "center bottom" : "center",
          }}
        >
          {/* <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
          ></source> */}
          <source type="video/webm;codecs=vp9" src={src.webmVp9}></source>

          {/* mp4 as fallback */}
          <source
            // webm command
            // ffmpeg -i about-intro-video.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus output.webm

            // for webm vp9 encoding
            // ffmpeg -i about-intro-video.mp4 -keyint_min 30 -g 30 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus output.webm

            // for webm vp8 encoding (supported by mobile safari according to caniuse)
            // ffmpeg -i about-intro-video.mp4 -keyint_min 30 -g 30 -c:v libvpx -crf 30 -b:v 0 -b:a 128k -c:a libopus output.webm

            // for webm vp8 encoding no sound (supported by mobile safari according to caniuse)
            // ffmpeg -i about-intro-video.mp4 -keyint_min 30 -g 30 -c:v libvpx -crf 30 -b:v 0 -b:a 128k -an output.webm

            // how to make webm to play smoothly
            // https://forum.videohelp.com/threads/389787-Using-ffmpeg-to-make-an-html5-webm-video-scroll-smoothly
            // type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'

            // more resource on a vue component
            // https://github.com/diracleo/vue-scrubbable-video
            type='video/webm;codecs="vp8"'
            // type="video/webm"
            src={src.webm}
          ></source>
          <source type="video/mp4" src={src.mp4}></source>
        </motion.video>
      </Sticky>
    </div>
  );
};

export default ScrollVideo;

// ffmpeg -i Homepage_1.mp4 -c:v libvpx -b:v 1.5M -g 15 -c:a libvorbis -b:a 128k output.webm