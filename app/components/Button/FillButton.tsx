"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "@/app//util/AnimationConfig";
import Link from "next/link";
import localFont from "next/font/local";

type Props = {
  children?: React.ReactNode;
  url: string;
  style: string;
};

const montserratt = localFont({
  src: [
    {
      path: "../../fonts/montserrat/Montserrat-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const Button = ({ children, url, style }: Props) => {
  return (
    <motion.div
      initial={{
        backgroundColor: "rgba(0,0,0)",
        color: "white",
      }}
      whileHover={{
        color: "#AACAE6",
        fontWeight: "bold",
      }}
      className={`btn-wrap min-w-max align-middle w-24 font-mono font-medium text-small leading-none px-6 py-4 border-solid border border-black rounded-full ${style}`}
    >
      <Link
        href={url}
        className={`button-content flex justify-center m-auto align-middle ${montserratt.className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Button;
