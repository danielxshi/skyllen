//Represents Slug Nav

import Link from "next/link";
import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/images/logo-full.webp";
import ContentfulImage from "@/lib/contentful-image";

type Props = {
  onClick;
  onLogoClick;
};

function toggleLanguage() {
  console.log("language toggle");
}

class SlugNav extends Component<Props> {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <AnimatePresence>
        <header className="navbar">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.25, ease: "easeInOut" }}
            className="container"
          >
            <div>
              <div className="inner-header">
                <div className="logo">
                  <Link
                    onClick={() => {
                      this.props.onLogoClick();
                    }}
                    href="/"
                  >
                    <ContentfulImage
                      width={120}
                      height={120}
                      quality={85}
                      src={logo}
                    />
                  </Link>
                </div>
                <div className="menu">
                  <button
                    //Change this to toggleLanguage
                    onClick={() => toggleLanguage()}
                    className="z-10 text-white text-lg lang-btn"
                  >
                    EN
                  </button>

                  <button
                    id="nav-icon2"
                    className={this.state.clicked ? "open" : "closed"}
                    onClick={() => {
                      this.props.onClick();
                      this.handleClick();
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </motion.nav>
        </header>
      </AnimatePresence>
    );
  }
}
export default SlugNav;
