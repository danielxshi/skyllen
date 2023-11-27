//Represents Slug Nav

import Link from "next/link";
import BackButton from "../Button/BackButton";
import React, { Component } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/nav-logo.png"
import ContentfulImage from "@/lib/contentful-image";

class SlugNav extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    // Disable menu for 1200ms *incomplete*
    // setTimeout(() => {
    // }, 1200)

    console.log(this.state) 
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
            <div className="">
              <div className="inner-header">
                <div className="logo">
                  <Link onClick={() => {
                      this.props.onLogoClick();
                    }} href="/"><ContentfulImage width={36} src={logo}/></Link>
                </div>
                <div className="menu">
                  <button
                    id="nav-icon2"
                    className={this.state.clicked ? "open" : null}
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

              {/* <NavButton text="testing" /> */}
            </div>
          </motion.nav>
        </header>
      </AnimatePresence>
    );
  }
}
export default SlugNav;

//Add open modal and animate onClick!
