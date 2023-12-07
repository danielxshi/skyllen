"use client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = ({ children, ...props }) => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log(scrollY);
    console.log(setHidden);
  }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <section className={`${props.style}`}>
      <motion.header
      // variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      // animate={hidden ? "hidden" : "visible"}
      // transition={{ duration: 0.35, ease: "easeInOut" }}
      // className={`navbar ${hidden ? "bg-none" : "bg-black"}`}
      >
        {children}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`navbar top-0 absolute w-screen h-full  ${
            hidden ? "bg-none" : "bg-black "
          }`}
        ></motion.div>
      </motion.header>
    </section>
  );
};

export default Navbar;
