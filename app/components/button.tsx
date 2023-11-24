import React from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../util/AnimationConfig";
import Link from "next/link";

const Button = ({ children, onClick, ...props }) => {
  return (
    <motion.div
      onClick={onClick}
      transition={{
        duration: AnimationConfig.VERY_FAST,
        ease: AnimationConfig.EASING,
      }}
      initial={{
        backgroundColor: "rgba(255,255,255,.0)",
      }}
      whileHover={{
        backgroundColor: "#AACAE6",
        // scale: 1.1,
      }}
      className="btn-wrap min-w-max align-middle w-24 font-mono font-medium text-small leading-none px-6 py-4 border-solid border border-gray-full rounded-lg"
    >
      {/* <a className="hit" href=""></a> */}
      {/* <div className="btn-inner"> */}
      {/* <div className="bg" /> */}
      <Link href={props.url} className="button-content flex justify-center m-auto align-middle">
        {children}
      </Link>
      {/* </div> */}
    </motion.div>
  );
};

export default Button;
