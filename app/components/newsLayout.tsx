import Banner from "./banner";
import PageSection from "./page-section";
import ParallaxBG from "./ParallaxBG";
import localFont from "next/font/local";

const montserratt = localFont({
    src: [
      {
        path: "../fonts/montserrat/Montserrat-VariableFont_wght.ttf",
        weight: "400",
        style: "normal",
      },
    ],
  });

const montserrattBold = localFont({
  src: [
    {
      path: "../fonts/montserrat/Montserrat-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

type Props = {
  children?: React.ReactNode;
  style?: string;
  // title?: string;
  style2?: string;
  overline?: string;
};

const NewsLayout = ({ children, style, style2, overline }: Props) => {
  return (
    <>
      {" "}
      <ParallaxBG url="https://i.imgur.com/p1QJ3xJ.jpg">
        {/* <Banner
          style="min-h-screen flex"
          // title={ProjectMessages.CompanyTitle}
          overline="COMPANY"
        /> */}
        <section className={`banner-container container ${style}`}>
          {children}
          <div
            className={`m-auto flex h-fit flex-col md:w-4/5 ${style2}`}
          >
            <h1
              className={`text-center text-xl md:text-5xl ${montserratt.className}`}
            >
              We're a{" "}
              <strong className={` ${montserrattBold.className}`}>
                multi-disciplinary
              </strong>{" "}
              Real Estate development firm focusing on developing properties
              that connect{" "}
              <strong className={` ${montserrattBold.className}`}>
                Nature
              </strong>
              ,{" "}
              <strong className={` ${montserrattBold.className}`}>
                Architecture
              </strong>
              ,{" "}
              <strong className={` ${montserrattBold.className}`}>
                Technology
              </strong>
              , and{" "}
              <strong className={` ${montserrattBold.className}`}>
                Functionality
              </strong>
              .
            </h1>
            <div className="flex justify-center flex-col m-auto w-fit text-center mt-8">
              <p className={` ${montserrattBold.className}`}>{overline}</p>
            </div>
          </div>
        </section>
      </ParallaxBG>
    </>
  );
};
export default NewsLayout;
