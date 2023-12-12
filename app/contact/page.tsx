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
// import SendHandler from "./sendHandler"
import axios from "axios";
import { useForm, ValidationError } from "@formspree/react";

// End of new Vercel contact form

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
  const [state, handleSubmit] = useForm("mrgwnvpa");

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
  // const handleValidation = () => {
  //   let tempErrors = {};
  //   let isValid = true;

  //   if (fullname.length <= 0) {
  //     tempErrors["fullname"] = true;
  //     isValid = false;
  //   }
  //   if (email.length <= 0) {
  //     tempErrors["email"] = true;
  //     isValid = false;
  //   }
  //   if (subject.length <= 0) {
  //     tempErrors["subject"] = true;
  //     isValid = false;
  //   }
  //   if (message.length <= 0) {
  //     tempErrors["message"] = true;
  //     isValid = false;
  //   }

  //   setErrors({ ...tempErrors });
  //   console.log("errors", errors);
  //   return isValid;
  // };

  // Event handler to update the state when the select field changes
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
    if (
      JSON.stringify({ selectedValue }) ==
      JSON.stringify({ selectedValue: "option1" })
    ) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };
  if (state.succeeded) {
    console.log("success");
  }
  // async function handleOnSubmit(e) {
  //   e.preventDefault();
  //   const formData = JSON.parse(e.body);

  //   // const replacebleData = {
  //   //   key: "Value",
  //   // };
  //   // await email.sendEmail(emailArray, subjectLine, templateId, replacebleData);

  //   console.log(formData);
  // }

  // New vercel contact form

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
    name: "",
    _phone: "",
    postalcode: "",
    selectedValue: "",
    _company: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
        name: "",
        _phone: "",
        postalcode: "",
        selectedValue: "",
        _company: "",
      });
    } else {
      // setStatus({
      //   info: { error: true, msg: msg },
      // });
      console.log("404 error");
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
  //   // axios({
  //   //   method: "POST",
  //   //   url: "https://formspree.io/https://formspree.io/f/mrgwnvpa",
  //   //   data: inputs,
  //   // })
  //   // handleSubmit
  //   //   .then((response) => {
  //   //     handleServerResponse(
  //   //       true,
  //   //       "Thank you, your message has been submitted."
  //   //     );
  //   //   })
  //   // .catch((error) => {
  //   //   handleServerResponse(false, error.response.data.error);
  //   // });
  // };

  // End of new vercel contact form

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
              onSubmit={handleSubmit}
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
                value={inputs.name}
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
                onChange={handleOnChange}
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
                name="_replyto"
                placeholder="Your Email Address"
                value={inputs.email}
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
                onChange={handleOnChange}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label className="required label-base">
                {localizedMessages.CONTACT_FORM_PHONE}
              </label>
              <input
                aria-required="true"
                // type="email"
                // id="email"
                // name="email"
                value={inputs.phone}
                onChange={handleOnChange}
                name="_phone"
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
                name="_postal"
                onChange={handleOnChange}
                value={inputs.postal}
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
                  value={inputs.selectedValue}
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
                  value={inputs.company}
                  onChange={handleOnChange}
                ></input>
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
                  disabled={status.submitting}
                  id="submit"
                  name="submit"
                >
                  {!status.submitting
                    ? !status.submitted
                      ? "Submit"
                      : "Submitted"
                    : "Submitted"}{" "}
                </button>
              </motion.div>
            </form>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
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
