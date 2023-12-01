"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "@/app//util/AnimationConfig";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  url: string;
};

const Button = ({ children, url }: Props) => {
  return (
    <motion.div
      initial={{
        backgroundColor: "rgba(0,0,0)",
        color: "white"
      }}
      whileHover={{
        color: "#AACAE6",
        fontWeight: "bold",
      }}
      className="btn-wrap min-w-max align-middle w-24 font-mono font-medium text-small leading-none px-6 py-4 border-solid border border-black rounded-full"
    >
      <Link
        href={url}
        className="button-content flex justify-center m-auto align-middle "
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Button;
