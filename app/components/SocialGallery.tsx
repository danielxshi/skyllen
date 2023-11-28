"use client";
import Headline from "./headline";
import { motion, AnimatePresence } from "framer-motion";
import ContentfulImage from "@/lib/contentful-image";
import Link from "next/link";
import image1 from "../images/living-space-landing.webp";
import image2 from "../images/pendrell-aerial.webp";
import image3 from "../images/618-lobby.webp";

const content = [
  {
    image: image1,
    key: 1,
    url: "/",
    alt: "",
  },
  {
    image: image2,
    key: 2,
    url: "/",
    alt: "",
  },
  {
    image: image3,
    key: 3,
    url: "/",
    alt: "",
  },
  {
    image: image3,
    key: 3,
    url: "/",
    alt: "",
  },
  {
    image: image3,
    key: 3,
    url: "/",
    alt: "",
  },
  {
    image: image3,
    key: 3,
    url: "/",
    alt: "",
  },
];

export default function first(props) {
  return (
    <>
      <Headline
        overline="social media"
        title="Smart Design and Distinct Spaces"
      />

      {/* <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 1 },
            }}
            className="relative z-10 block overflow-hidden"
          >
            <div className="hover:cursor-pointer flex justify-center items-center h-full"></div> */}

      <div className="social-media-container overflow-x-scroll">
        {content.map((el) => (
          <Link href="/">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 1 },
              }}
              className="social-media-content relative z-10 block"
              key={el.name}
            >
              <ContentfulImage src={el.image} fill={true} />
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="mt-8 underscore-cta ">
        <Link href="/">Follow our social media</Link>
      </div>
    </>
  );
}
