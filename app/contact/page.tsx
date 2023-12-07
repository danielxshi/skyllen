"use client";
import ParallaxBG from "../components/ParallaxBG";
import Banner from "../components/banner";
import ProjectMessages from "../JSON/ProjectMessages";
import PageSection from "../components/page-section";
import FooterMessages from "../JSON/FooterItems";
import Link from "next/link";
import bannerBG from "../images/contact-banner.webp";
import Button from "../components/Button/FillButton";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import test from "../images/SkyllenSign.webp";
import { getLocalizedMessages } from "@/src/i18n";

const localizedMessages = getLocalizedMessages();

const montserratt = localFont({
  src: [
    {
      path: "../fonts/montserrat/Montserrat-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const renderSwitch = (params) => {
  const keys = Object.keys(params);
  const value = keys;

  const test = params[value[0]];
  const test2 = test["content"];

  switch (keys[0]) {
    case "contact":
      return (
        <div className="col-span-3">
          <ul>
            {test2.map((item, index) => (
              <div key={index}>
                <li className="underscore-cta">{item["email"]}</li>
                <li className="underscore-cta">{item["address"]}</li>
                <li className="underscore-cta">{item["city"]}</li>
                <li className="underscore-cta">{item["phone"]}</li>
              </div>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
};

export default function Contact() {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    // Array.from(e.currentTarget.elements).forEach(field => {
    //   if(!field.name) return;
    //   formData[field.name] = field.value;
    // });
    // console.log(formData);
  }

  console.log(FooterMessages);
  return (
    <>
      <ParallaxBG url="../images/SkyllenSign.webp">
        <div className="h-screen md:h-screen-3/4 flex">
          <Banner
            style="m-auto"
            // title={ProjectMessages.CompanyTitle}
            overline="CONTACT"
          >
            <strong className={` ${montserratt.className}`}>
              {" "}
              Get in Touch.
            </strong>
          </Banner>
        </div>
      </ParallaxBG>
      <PageSection style="pt-16 pb-16  flex md:pb-32">
        <div className="container md:grid-cols-8 flex flex-col-reverse form-container">
          <div className="md:col-span-6 md:col-start-5">
            <form id="contact-form" method="post" onSubmit={handleOnSubmit}>
              <label htmlFor="name">{localizedMessages.CONTACT_FORM_FULL_NAME}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <label htmlFor="email">{localizedMessages.CONTACT_FORM_EMAIL}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
              <label htmlFor="email">{localizedMessages.CONTACT_FORM_PHONE}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Phone"
                required
              />
              <label htmlFor="email">{localizedMessages.CONTACT_FORM_POSTAL_CODE}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Postal Code"
                required
              />
              <label htmlFor="email">{localizedMessages.CONTACT_FORM_Q_REALTOR}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Company"
                required
              />
              {/* <select id="cars" name="cars">
                <option value="volvo">{localizedMessages.YES}</option>
                <option value="saab">{localizedMessages.NO}</option>
              </select> */}
              {/* <label htmlFor="email">Email Address</label>
  <input type="email" id="email" name="email" placeholder="Your Email Address" required>
      <label htmlFor="message">Message</label>
  <textarea rows="6" placeholder="Your Message" id="message" name="message" required></textarea> */}

              <motion.div
                initial={{
                  backgroundColor: "rgba(0,0,0)",
                  color: "white",
                }}
                whileHover={{
                  color: "#AACAE6",
                  fontWeight: "bold",
                }}
                className="md:mt-8 mt-4 btn-wrap min-w-max align-middle w-24 font-mono font-medium text-small leading-none px-6 py-4 border-solid border border-black rounded-full"
              >
                <button
                  className={`button-content flex justify-center m-auto align-middle ${montserratt.className}`}
                  type="submit"
                  id="submit"
                  name="submit"
                >
                  SUBMIT
                </button>
              </motion.div>
            </form>
          </div>
          <div className="mt-16 pb-16 md:pb-0 md:mt-0 md:col-start-1 md:row-start-1 md:col-span-2">
            <p className={`mb-4 uppercase ${montserratt.className}`}>
              Skyllen Pacific
            </p>
            {FooterMessages.FooterItems.map((item, index) => {
              return <>{renderSwitch(item)}</>;
            })}
            <Link className="font-bold underline" href="/">
              Homeowner Care
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
