import NewsLayout from "../../components/newsLayout";
import PageSection from "@/app/components/page-section";
import ContentfulImage from "@/lib/contentful-image";
import dallas from "../../../public/images/construction.webp";
import localFont from "next/font/local";
import china from "../../../public/images/hero.dff99331.webp";

const montserratt = localFont({
  src: [
    {
      path: "../../fonts/montserrat/Montserrat-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Page() {
  return (
    <>
      <NewsLayout style="flex pb-16 pt-16" style2="m-auto" />
      <PageSection style="container pt-16 pb-16">
        <div className="grid-container">
          <div className="col-start-1 col-span-5">
            <p className={`m-auto mb-4 uppercase ${montserratt.className}`}>
              Title
            </p>
            <p className=" mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              harum alias explicabo doloribus atque commodi deleniti quam, dicta
              culpa adipisci repellendus consequatur libero magnam sunt.
              Exercitationem illum doloremque quisquam non.
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              harum alias explicabo doloribus atque commodi deleniti quam, dicta
              culpa adipisci repellendus consequatur libero magnam sunt.
              Exercitationem illum doloremque quisquam non.
            </p>
          </div>

          <div className="w-600 relativ ml-8 col-start-7 col-span-2">
            <ContentfulImage src={dallas} height={500} quality={85} />
          </div>
        </div>
      </PageSection>
      <PageSection style="container pt-16 pb-16">
        <div className="grid-container">
          <div className="col-start-1 col-span-5">
            <ContentfulImage src={china} height={500} quality={85} />
          </div>

          <div className="w-600 relativ ml-8 col-start-7 col-span-2">
            <p className={`m-auto mb-4 uppercase ${montserratt.className}`}>
              Title
            </p>
            <p className=" mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              harum alias explicabo doloribus atque commodi deleniti quam, dicta
              culpa adipisci repellendus consequatur libero magnam sunt.
              Exercitationem illum doloremque quisquam non.
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              harum alias explicabo doloribus atque commodi deleniti quam, dicta
              culpa adipisci repellendus consequatur libero magnam sunt.
              Exercitationem illum doloremque quisquam non.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
