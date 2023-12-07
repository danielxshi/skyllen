//Represents Slug Nav
"use client"

import Link from "next/link";
import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/images/logo-full.webp";
import ContentfulImage from "@/lib/contentful-image";
import { getLocale, toggleLocale } from "@/src/i18n";
import Navbar from "./Navbar";

type Props = {
  onClick;
  onLogoClick;
};

function localeClicked() {
  toggleLocale();
  location.reload();
}

class SlugNav extends Component<Props, any> {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    const locale = getLocale();
    return (
      // <AnimatePresence>
      <Navbar>
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
                    width={150}
                    height={150}
                    quality={85}
                    src={logo}
                  />
                </Link>
              </div>
              <div className="menu">
                <button
                  //Change this to toggleLanguage
                  onClick={() => localeClicked()}
                  className="z-10 text-white text-lg lang-btn"
                >
                  {locale}
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
      </Navbar>
      // </AnimatePresence>
    );
  }
}
export default SlugNav;
