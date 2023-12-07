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

  const [hidden, setHidden] = useState(false);
  const [brandHidden, setHiddenBranding] = useState(false);

  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (
      (latest > previous &&
        latest > 1 &&
        window.scrollY > 0 &&
        window.scrollY < 150) ||
      window.scrollY == 0
    ) {
      setHidden(true);
    } else if (window.scrollY >= 0) {
      setHidden(false);
      setHiddenBranding(false);
    }
    if (window.scrollY == 0) {
      setHiddenBranding(false);
    }
    if (latest > previous && latest > 150) {
    //   setHiddenBranding(true);
    }
  });

  return (
    <section className={`${props.style}`}>
      <motion.header
        // variants={{
        //   brandVisible: { y: 0, opacity: 1 },
        //   brandHidden: { y: "-100%", opacity: 0 },
        // }}
        // animate={brandHidden ? "brandHidden" : "brandVisible"}
        // transition={{ duration: 1.25, ease: "easeInOut" }}
        // className={`drop-shadow-sm	 navbar blur-bg ${
        //   hidden ? "bg-none" : "bg-black/[0.95]"
        // }`}
      >
        {children}
      </motion.header>
      <motion.div
        initial={{ opacity: 0 }}
        variants={{
          visible: { y: 0, opacity: 0.95 },
          hidden: { y: "-100%",  },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.95, ease: "easeInOut", delay: 0.25 }}
        className={`navbar top-0 z-10 fixed h-24 w-screen ${
          hidden ? "bg-black/[0.5] " : "bg-black  "
        }`}
      ></motion.div>
    </section>
  );
};

export default Navbar;
