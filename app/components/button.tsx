import React from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../util/AnimationConfig";
import Link from "next/link";

const Button = ({ children, ...props }) => {
  return (
    <motion.div
      // onClick={onClick}
      transition={{
        duration: AnimationConfig.VERY_FAST,
        ease: AnimationConfig.EASING,
      }}
      initial={{
        backgroundColor: "rgba(255,255,255,.0)",
      }}
      whileHover={{
        backgroundColor: "#AACAE6",
      }}
      className={`btn-wrap min-w-max align-middle w-24 font-mono font-medium text-small leading-none px-6 py-4 border-solid border rounded-full ${props.style}`}
    >
      <Link
        href={props.url}
        className="button-content flex justify-center m-auto align-middle"
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Button;
