import { motion, AnimatePresence } from "framer-motion";
import ContentfulImage from "@/lib/contentful-image";
import Link from "next/link";
export default function GalleryButton(props) {
  return (
    <>
      <Link href={props.link}>
        <div className="relative z-10 block">
          <div className="hover:cursor-pointer flex justify-center items-center">
            <div className="bg-gradient"></div>
            <ContentfulImage
              src={props.url}
              // height={props.height}
              // width={props.width}
              alt={props.alt}
              quality={50}
              fill={true}
            />
          </div>

          <div className="gallery-bg mb-8 flex z-0">
            <span className="heavy-med m-auto w-full justify-center text-center font-bold relative text-white">
              {props.status}
            </span>
          </div>
        </div>
      </Link>
      <Link href={props.link}>
        <div className="text-container">
          <h3 className="mb-2">{props.projectName}</h3>
          <p>{props.location}</p>
        </div>
      </Link>
    </>
  );
}
