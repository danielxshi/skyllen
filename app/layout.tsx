"use client";
import "./globals.scss";
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import FooterMessages from "./JSON/FooterItems";
import Link from "next/link";
import { useState } from "react";
import Header from "./components/HeaderContainer";
import { AnimatePresence } from "framer-motion";
import BurgerModal from "./components/burger-modal";
import ScrollObserver from "./util/scroll-observer";
import ParallaxBG from "./components/ParallaxBG";
import FooterBG from "./images/footer.webp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const renderSwitch = (params) => {
  const keys = Object.keys(params);
  const value = keys;
  const test = params[value];
  const test2 = test["content"];

  switch (keys[0]) {
    case "contact":
      return (
        <div className="col-span-full mb-8 md:mb-0 md:col-span-3">
          <h3 className="mb-8">Let's Connect</h3>
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
    case "projects":
      return (
        <div className="col-span-full mb-8 md:mb-0 md:col-start-6 md:col-span-2">
          <h3 className="mb-8">Projects</h3>
          <ul className="flex flex-col">
            {test2.map((item, index) => (
              <li className="underscore-cta">
                <Link key={index} href={item["url"]} className="underscore-cta">
                  {item["project"]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );

    case "socials":
      return (
        <div className="md:col-start-8 md:col-span-2">
          <h3 className="mb-8">Follow Us</h3>
          <ul>
            {test2.map((item, index) => (
              <>
                <li key={index} className="underscore-cta">
                  <Link locale={false} replace href={item["url"]}>
                    {item["link"]}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      );

    case "copyright":
      return (
        <div className="mt-20 col-span-full flex flex-row-reverse pb-4">
          <ul>
            {test2.map((item, index) => (
              <>
                <footer key={index}>&copy; {item["text"]}</footer>
              </>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
};

function Footer() {
  return (
    <footer className="text-white bg-accent-1 flex pt-20 footer-container overflow-hidden">
      <div className="content container grid-container">
        {FooterMessages.FooterItems.map((item, index) => {
          return <>{renderSwitch(item)}</>;
        })}
      </div>
    </footer>
  );
}

function HeaderModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <AnimatePresence>
      <BurgerModal showModal={showModal} setShowModal={setShowModal} />
      {<Header onClick={openModal} />}
    </AnimatePresence>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollObserver>
      <html lang="en" className={inter.variable}>
        <body>
          <section className="min-h-screen">
            <HeaderModal />
            <main>{children}</main>

            <ParallaxBG url={FooterBG}>
              <Footer />
            </ParallaxBG>
          </section>
        </body>
      </html>
    </ScrollObserver>
  );
}
