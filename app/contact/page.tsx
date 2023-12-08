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
// import { useState, useEffect } from "react";

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

type Props = {
  field: string;
};

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
                <li>{item["email"]}</li>
                <li>{item["address"]}</li>
                <li>{item["city"]}</li>
                <li>{item["phone"]}</li>
              </div>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
};

// Define a function to be executed when the select option changes
// function handleSelectChange(event: Event) {
//   // Get the selected value
//   const selectedValue = (event.target as HTMLSelectElement).value;

//   // Perform actions based on the selected value
//   console.log(`Selected option: ${selectedValue}`);

//   // Add your registration logic here or call another function
//   // based on the selected option.
// }

// // Add an event listener to the select element
// const selectElement = document.getElementById('mySelect') as HTMLSelectElement | null;

// if (selectElement) {
//   selectElement.addEventListener('change', handleSelectChange);
// }


export default function Contact() {
  // const [hidden, setHidden] = useState(true);
  // const [select, setSelect] = useState("b");
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    // Array.from(e.currentTarget.elements).forEach(field => {
    //   if(!field.name) return;
    //   formData[field.name] = field.value;
    // });
    console.log(formData);
  }

  // console.log(select.valueOf)
  return (
    <>
      <ParallaxBG url="../images/SkyllenSign.webp">
        <div className="h-screen md:h-screen-3/4 flex">
          <Banner
            style="m-auto md:pb-16"
            // title={ProjectMessages.CompanyTitle}
            overline={localizedMessages.CONTACT_HEADER_OVERRLINE}
          >
            <strong className={` ${montserratt.className}`}>
              {" "}
              {localizedMessages.CONTACT_HEADER}
            </strong>
          </Banner>
        </div>
      </ParallaxBG>
      <PageSection style="pt-16 pb-16 flex md:pb-32">
        <div className="container md:grid md:grid-cols-8 flex flex-col-reverse form-container">
          <div className="md:col-span-6 md:col-start-5">
            <form
              id="contact-form"
              className="md:w-fit"
              method="post"
              onSubmit={handleOnSubmit}
            >
              <label className="required" htmlFor="name">
                {localizedMessages.CONTACT_FORM_FULL_NAME}
              </label>
              <input
                required
                className="required"
                aria-required="true"
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
              />
              <label className="required" htmlFor="email">
                {localizedMessages.CONTACT_FORM_EMAIL}
              </label>
              <input
                aria-required="true"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
              <label className="required">
                {localizedMessages.CONTACT_FORM_PHONE}
              </label>
              <input
                aria-required="true"
                // type="email"
                // id="email"
                // name="email"
                placeholder="Your Phone"
                required
              />
              <label className="required">
                {localizedMessages.CONTACT_FORM_POSTAL_CODE}
              </label>
              <input
                aria-required="true"
                type="text"
                // id="email"
                // name="email"
                placeholder="Your Postal Code"
                required
              />

              <label className="required">
                {localizedMessages.CONTACT_FORM_Q_REALTOR}
              </label>
              <div className="flex flex-row form-select-wrapper my-4 ">
                {" "}
                <select
                  name="agent"
                  id="mySelect"
                  className="form-select"
                  required
                >
                  <option
                    // value={value}
                    // onChange={(e) => {
                    //   setSelect(e.target.value);
                    // }}
                    value="Select Option"
                  >Select YES/NO</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                  
                </select>
              </div>

              <motion.div
                // className={` ${hidden ? "hidden " : "flex  "}`}
                animate={hidden ? "hidden" : "visible"}
              >
                <label className="required">
                  {localizedMessages.CONTACT_FORM_Q_REALTOR}
                </label>
                <input
                  aria-required="true"
                  type="text"
                  // id="email"
                  // name="email"
                  placeholder="Your Company"
                  required
                />
              </motion.div>

              <div className="disclaimer w-fit flex align-middle items-center flex-row">
                <input
                  aria-required="true"
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  required
                  className="w-fit h-4 m-auto self-center"
                />
                <label className="required ml-4">
                  {localizedMessages.CONTACT_FORM_DISCLAIMER}
                </label>
              </div>

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
