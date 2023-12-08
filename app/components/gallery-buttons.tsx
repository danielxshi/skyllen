import { motion, AnimatePresence } from "framer-motion";
import ContentfulImage from "@/lib/contentful-image";
import Link from "next/link";
import localFont from "next/font/local";



const montserrat = localFont({
  src: [
    {
      path: "../fonts/montserrat/Montserrat-VariableFont_wght.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

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
            <div className="hover:cursor-pointer flex justify-center items-center h-full">
              <div className="bg-gradient"></div>
              <ContentfulImage
                src={props.url}
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
                className="flex heavy-med m-auto w-full tracking-tighter text-center relative text-white h-full align-middle justify-center items-center "
              >
                <div className={`${montserrat.className}`}>
                  {props.status}
                </div>
              </motion.span>
            </div>
          </motion.div>
        </div>
      </Link>
      <div className="underscore-cta-v2 gallery-text-container">
        <Link href={props.link}>
          <div className=" text-container">
            <p className={`uppercase  ${montserrat.className}`}>{props.projectName}</p>
            <p>{props.location}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
