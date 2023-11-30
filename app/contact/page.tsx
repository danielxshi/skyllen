import ParallaxBG from "../components/ParallaxBG";
import Banner from "../components/banner";
import ProjectMessages from "../JSON/ProjectMessages";
import PageSection from "../components/page-section";
import FooterMessages from "../JSON/FooterItems";
import Link from "next/link";
import bannerBG from "../images/contact-banner.webp"

const renderSwitch = (params) => {
  const keys = Object.keys(params);
  const value = typeof keys;

  const test = params[value];
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
  console.log(FooterMessages);
  return (
    <>
      <ParallaxBG url="https://i.imgur.com/aIBLNdp.jpg">
        <div className="h-screen-2/3 flex">
          <Banner
            style="m-auto"
            title={ProjectMessages.CompanyTitle}
            overline="COMPANY"
          />
        </div>
      </ParallaxBG>
      <PageSection style="pt-16 pb-16 h-128 flex">
        <div className="container grid-container">
          <div className="grid-start-1 col-span-6">
            <form id="contact-form" method="post">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
              {/* <label htmlFor="email">Email Address</label>
  <input type="email" id="email" name="email" placeholder="Your Email Address" required>
      <label htmlFor="message">Message</label>
  <textarea rows="6" placeholder="Your Message" id="message" name="message" required></textarea> */}
              <button type="submit" id="submit" name="submit">
                Send
              </button>
            </form>
          </div>
          <div className="grid-start-6 col-span-2">
            <h3 className="mb-4">Skyllen Pacific</h3>
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
