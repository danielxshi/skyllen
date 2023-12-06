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
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="navbar bg-black"
      >
        {children}
      </motion.header>
    </section>
  );
};

export default Navbar;
