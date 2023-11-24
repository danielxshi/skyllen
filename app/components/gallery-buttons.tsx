import { motion, AnimatePresence } from "framer-motion";
import ContentfulImage from "@/lib/contentful-image";
import Link from "next/link";
export default function GalleryButton(props) {
  return (
    <div>
      <Link href={props.link}>
        <div className="overflow-hidden mb-8">
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 1 },
            }}
            className="relative z-10 block overflow-hidden"
          >
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
              <motion.span
                whileHover={{
                  scale: 0.85,
                  transition: { duration: 1 },
                }}
                className="flex heavy-med m-auto w-full justify-center text-center font-bold relative text-white h-full align-middle justify-center items-center"
              >
                {props.status}
              </motion.span>
            </div>
          </motion.div>
        </div>
      </Link>
      <div className="underscore-cta-v2">
        <Link href={props.link}>
          <div className=" text-container">
            <h3 className=" mb-2">{props.projectName}</h3>
            <p>{props.location}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
