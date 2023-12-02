"use client";
import React, {
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
// import "./styles.css";
import {
  clamp,
  motion,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";
import {
  Tile,
  TileBackground,
  TileContent,
  TileWrapper,
} from "../../company/tile";

import {
  WorkBackground,
  WorkContainer,
  WorkBleedProject,
  WorkBleed,
  WorkBleedR,
  WorkContain,
} from "../../company/work";
import projectImageL1 from "../../images/living-space-landing.webp";
import projectImageR1 from "../../images/living-space.webp";
import projectImageL2 from "../../images/1650-night.webp";
import projectImageR2 from "../../images/1650-day.webp";
import projectImageL3 from "../../images/pendrell-aerial.webp";
import projectImageR3 from "../../images/streetview.webp";
import ContentfulImage from "@/lib/contentful-image";
import localFont from "next/font/local";
import ParallaxFooter from "../ParallaxFooter";
import Banner from "../banner";


const quicksand = localFont({
  src: [
    {
      path: "../../fonts/quicksand/Quicksand-VariableFont_wght.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

const ParallaxScrollVideo = () => {
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const [videoScrollDistance, setVideoScrollDistance] = useState(0);

  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const [hasLoaded, setLoaded] = useState(false);

  const video = videoRef.current;

  const projects = [
    {
      name: "Our focus",
      page: 0,
      imageOne: "https://i.imgur.com/1hXPq7F.mp4",
      imageTwo: projectImageR1,
      link: "/posts/618-carnavron",
      description:
        "We're a multi-disciplinary Real Estate development firm focusing on developing properties that connect Nature, Architecture, Technology, and Functionality.",
    },
    {
      name: "We are inspired by",

      page: 1,
      imageOne: "https://i.imgur.com/EODCPWr.mp4",
      imageTwo: projectImageR2,
      link: "/posts/1650-on-second",
      description:
        "We are inspired by the evolving interpretations of urbanity and sustainability emerging from recent cityscapes.",
    },
    {
      name: "What we prioritize",
      page: 2,
      imageOne: "https://i.imgur.com/EODCPWr.mp4",
      imageTwo: projectImageR3,
      link: "/posts/pendrell-street",
      description:
        "We prioritizes smart design and distinct spaces to craft enduring homes and workplaces.",
    },
  ];

  // useEffect(() => {
  //   setLoaded(true);
  //   const playbackConst = 250; // Adjust the constant as needed
  //   // Use requestAnimationFrame for smooth playback
  //   function scrollPlay() {
  //     if (videoRef.current) {
  //       const frameNumber = window.pageYOffset / playbackConst;
  //       videoRef.current.currentTime = frameNumber;
  //     }
  //     window.requestAnimationFrame(scrollPlay);
  //   }

  //   window.requestAnimationFrame(scrollPlay);
  // }, []);
  // const handleMetaDataLoaded = () => {
  //   setVideoScrollDistance(Math.floor(videoRef.current.duration) * 500);
  // };

  // useEffect(() => {
  //   videoRef.current.load();
  // }, [videoRef]);

  useEffect(() => {
    // refreshDocumentMeasurement();
    // console.log("dist" + videoScrollDistance);
  }, [videoScrollDistance]);

  //   Old height function
  useEffect(() => {
    // video!.addEventListener("loadedmetadata", () => {
    //   const { duration } = video;
    //   const playbackConst = 500;
    //   const scrollSection = scrollSectionRef.current;
    //   console.log("scrollSection", videoRef.current.duration);
    //   if (videoRef?.current) {
    //     scrollSection!.style.height =
    //       Math.floor(duration) * playbackConst + "px";
    //   }
    //   console.log(duration); // Output: video duration in seconds
    // });
    // return () => {
    //   video.removeEventListener("loadedmetadata", () => {});
    // };
  }, []);

  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <ParallaxFooter 
        
        url={require('../../company/train.gif')}>
          <div className="min-h-screen"></div>
        </ParallaxFooter>
        {projects.map((el) => (
          <Tile
            page={el.page}
            renderContent={({ progress }) => (
              <div
              // className="relative h-fit w-screen "
              // style={{
              //   height: videoScrollDistance,
              // }}
              >
                <div className="h-screen flex flex-col-reverse p-8 w-screen absolute z-50 text-white bg-blur-black">
                  <div className="mb-auto text-content h-3/4 mt-auto flex flex-col mr-auto ml-auto w-600 justify-center">
                    {/* <div className="">
                      <h3
                        className={`m-auto flex w-full text-center ${quicksand.className}`}
                      >
                        {el.name}{" "}
                      </h3>
                      <span>-</span>
                    </div> */}
                    <div>
                      <h3 className="tracking-tight pb-8 text-center">
                        {el.description}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div ref={scrollSectionRef} id="scrollSection"></div> */}
                {/* <motion.video ref={videoRef} id="v0" preload="preload">
                  <source
                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                    src={el.imageOne}
                  ></source>
                </motion.video> */}
              </div>
            )}
          ></Tile>
        ))}
      </TileContent>
    </TileWrapper>
  );
};

{
  /* <WorkBleed progress={progress}>
                  <div className="project-card-content p-8 md:w-w-screen-1/2 w-screen">
                    <div className="text-content justify-between h-3/4 flex flex-col mr-auto ml-auto w-300">
                      <div className="">
                        <h3 className={`${quicksand.className}`}>{el.name} </h3>
                        <span>-</span>
                      </div>
                      <div>
                        <p className="tracking-tight pb-8">{el.description}</p>
                      </div>
                    </div>
                  </div>


                </WorkBleed> */
}

// Working small section for parallax video
{
  /* <div className="">
  <div
    className="h-fit"
    //   style={{
    //     height: videoScrollDistance,
    //   }}
  >
    <video ref={videoRef} id="v0" preload="preload">
      <source
        type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
      ></source>
    </video>
    <div ref={scrollSectionRef} id="scrollSection"></div>
  </div>
</div> */
}

export default ParallaxScrollVideo;

// ffmpeg -i Homepage_1.mp4 -c:v libvpx -b:v 1.5M -g 15 -c:a libvorbis -b:a 128k output.webm

// "use client";
// import React, {
//     MutableRefObject,
//     useEffect,
//     useMemo,
//     useRef,
//     useState,
//   } from "react";
// // import "./styles.css";
// import { clamp, motion, useMotionValue, useTransform } from "framer-motion";

// export default function ScrollParallaxVideo() {
//   //   const videoRef = useRef<HTMLVideoElement>(null);
//   const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
//   //   <HTMLVideoElement>document.getElementById('video');
//   const scrollSectionRef = useRef<HTMLDivElement>(null);
//   const [hasLoaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setLoaded(true);
//     const playbackConst = 500; // Adjust the constant as needed
//     // Use requestAnimationFrame for smooth playback
//     function scrollPlay() {
//       if (videoRef.current) {
//         const frameNumber = window.pageYOffset / playbackConst;
//         videoRef.current.currentTime = frameNumber;
//       }
//       window.requestAnimationFrame(scrollPlay);
//     }

//     window.requestAnimationFrame(scrollPlay);
//   }, []);

//   useEffect(() => {
//     const video = videoRef.current;

//     video!.addEventListener("loadedmetadata", () => {
//       const { duration } = video;
//       const playbackConst = 500;
//       const scrollSection = scrollSectionRef.current;
//       console.log("scrollSection", videoRef.current.duration);
//       if (videoRef?.current) {
//         scrollSection.style.height =
//           Math.floor(duration) * playbackConst + "px";
//       }
//       console.log(duration); // Output: video duration in seconds
//     });

//     return () => {
//       video.removeEventListener("loadedmetadata", () => {});
//     };
//   }, []);

//   return (
//     <div className="">
//       <div className="h-fit">
//         <video ref={videoRef} id="v0" preload="preload">
//           <source
//             type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
//             src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
//           ></source>
//         </video>
//         <div ref={scrollSectionRef} id="scrollSection"></div>
//       </div>
//     </div>
//   );
// }
