"use client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  scroll,
} from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = ({ children, ...props }) => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(true);
  const [brandHidden, setHiddenBranding] = useState(false);

  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (window.scrollY > 0) {
      setHidden(false);
    } else if (window.scrollY >= 0 || window.scrollY <= 25) {
      setHidden(true);
      setHiddenBranding(false);
    } else if (window.scrollY <= 10) {
      setHiddenBranding(false);
    } else if (latest > previous && latest > 150) {
      //   setHiddenBranding(true);
    }
  });

  return (
    <section className={`${props.style}`}>
      <header>{children}</header>
      <motion.div
        initial={{ opacity: 0 }}
        variants={{
          visible: { y: 0, opacity: 0.85 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.95, ease: "easeInOut", delay: 0.25 }}
        className={`navbar top-0 z-10 fixed h-24 w-screen z-20 ${
          hidden ? "bg-black/[0.88] " : "bg-black/[0.88]  "
        }`}
      ></motion.div>
    </section>
  );
};

export default Navbar;
