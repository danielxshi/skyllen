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
import { useState, useEffect } from "react";
// import { SelectedTeam } from "./form";

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
                <li>
                  {item["address"]}&nbsp;{item["address2"]}
                </li>
                <li>
                  {item["city"]}&nbsp;{item["postal"]}
                </li>
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


interface SelectComponentProps {
  // Define any additional props you may need
}

const Contact: React.FC<SelectComponentProps> = () => {
  const [hidden, setHidden] = useState(true);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
 //   Form validation state
 const [errors, setErrors] = useState({});

 //   Setting button text on form submission
 const [buttonText, setButtonText] = useState("Send");

 // Setting success or failure messages states
 const [showSuccessMessage, setShowSuccessMessage] = useState(false);
 const [showFailureMessage, setShowFailureMessage] = useState(false);

 // Validation check method
 const handleValidation = () => {
   let tempErrors = {};
   let isValid = true;

   if (fullname.length <= 0) {
     tempErrors["fullname"] = true;
     isValid = false;
   }
   if (email.length <= 0) {
     tempErrors["email"] = true;
     isValid = false;
   }
   if (subject.length <= 0) {
     tempErrors["subject"] = true;
     isValid = false;
   }
   if (message.length <= 0) {
     tempErrors["message"] = true;
     isValid = false;
   }

   setErrors({ ...tempErrors });
   console.log("errors", errors);
   return isValid;
 };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          // subject: subject,
          // message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log("ok" + fullname, email);
  };


  // Event handler to update the state when the select field changes
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
    if (
      JSON.stringify({ selectedValue }) ==
      JSON.stringify({ selectedValue: "option1" })
    ) {
      // console.log(hidden + " equals");
      setHidden(true);
    } else {
      // console.log(hidden + " does not equal");
      setHidden(false);
    }
    // console.log(JSON.stringify({ selectedValue }));
    // console.log(JSON.stringify({ selectedValue: "option1" }));
  };

  // console.log("You selected" + {SelectedTeam})
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
              <label className="required" htmlFor="fullname">
                {localizedMessages.CONTACT_FORM_FULL_NAME}
              </label>
              <input
                required
                className="required"
                aria-required="true"
                type="text"
                id="name"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                name="fullname"
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                required
              />
              <label className="required label-base">
                {localizedMessages.CONTACT_FORM_PHONE}
              </label>
              <input
                aria-required="true"
                // type="email"
                // id="email"
                // name="email"
                name="phone"
                placeholder="Your Phone"
                required
              />
              <label className="required label-base">
                {localizedMessages.CONTACT_FORM_POSTAL_CODE}
              </label>
              <input
                aria-required="true"
                type="text"
                // id="email"
                name="postal"
                placeholder="Your Postal Code"
                required
              />

              <label className="required label-base">
                {localizedMessages.CONTACT_FORM_Q_REALTOR}
              </label>
              <div className="flex flex-row form-select-wrapper my-4 ">
                {" "}
                <select
                  name="agent"
                  // id="mySelect"
                  className="form-select"
                  required
                  id="selectField"
                  value={selectedValue}
                  onChange={handleSelectChange}
                >
                  <option value="option2"> {localizedMessages.NO}</option>
                  <option value="option1">{localizedMessages.YES}</option>
                </select>
              </div>

              <motion.div
                // transition={{ duration: 0.95, ease: "easeInOut",  }}
                // initial={{ opacity: 0 }}
                className={` ${hidden ? "hidden " : "block  "}`}
                animate={hidden ? "hidden" : "visible"}
              >
                <label className="label-base">
                  {localizedMessages.CONTACT_FORM_Q_SELECT_TEXT}
                </label>
                <input
                  type="text"
                  placeholder="Your Company"
                  name="company"
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
                <label className="required ml-4 label-small w-full">
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
                  // fontWeight: "bold",
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
};

// import { useState } from 'react';

// interface SelectComponentProps {
//   // Define any additional props you may need
// }

// const SelectComponent: React.FC<SelectComponentProps> = () => {
//   // State to manage the selected value of the select field
//   const [selectedValue, setSelectedValue] = useState<string>('');

//   // Event handler to update the state when the select field changes
//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="selectField">Select Field:</label>
//       <select id="selectField" value={selectedValue} onChange={handleSelectChange}>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>

//       <p>Selected Value: {selectedValue}</p>
//     </div>
//   );
// };

export default Contact;

