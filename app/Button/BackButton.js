import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../util/AnimationConfig";
import Link from "next/link";

const ArrowLeftIcon = ({ isHovering }) => (
  <div className="w-fit h-fit overflow-hidden rotate-180 back-button">
    <motion.div
      className="flex flex-row"
      transition={{
        duration: AnimationConfig.NORMAL,
        ease: AnimationConfig.EASING,
      }}
      initial={{ x: "-1em" }}
      animate={{ x: isHovering ? "0em" : "-1em" }}
    >
      <motion.img
        transition={{
          duration: AnimationConfig.NORMAL,
          ease: AnimationConfig.EASING,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        className="h-[1em]"
        src="../favicon/icon-arrow-forward.svg"
      />
      <motion.img
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovering ? 0 : 1 }}
        transition={{
          duration: AnimationConfig.NORMAL,
          ease: AnimationConfig.EASING,
        }}
        className="h-[1em]"
        src="../favicon/icon-arrow-forward.svg"
      />
    </motion.div>
  </div>
);

const BackButton = ({ href = "#" }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      href={href}
      className="reset-link inline-block w-fit h-fit "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <ArrowLeftIcon className="text-white" isHovering={isHovering} />
    </Link>
  );
};

export default BackButton;
