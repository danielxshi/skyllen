// "use server"
import { motion, AnimatePresence } from "framer-motion";
import ContentfulImage from "@/lib/contentful-image";
import Link from "next/link";
import image1 from "@/public/images/ig/ig1.webp";
import image2 from "@/public/images/ig/ig2.webp";
import image3 from "@/public/images/ig/ig3.webp";
import image4 from "@/public/images/ig/ig4.webp";
import image5 from "@/public/images/ig/ig5.webp";
import image6 from "@/public/images/ig/ig6.webp";
import image7 from "@/public/images/Reelvideo-74132.webp"

const content = [
  {
    image: image7,
    key: 7,
    url: "https://www.instagram.com/p/C017YrCRr4y/",
    alt: "Skyllen Instagram Picture",
  },
  {
    image: image6,
    key: 6,
    url: "https://www.instagram.com/p/CxbE7RvvKAA/?img_index=1",
    alt: "Skyllen Instagram Picture",
  },
  {
    image: image5,
    key: 5,
    url: "https://www.instagram.com/p/CwWI5OtvqhA/",
    alt: "Skyllen Instagram Picture",
  },
  {
    image: image4,
    key: 4,
    url: "https://www.instagram.com/p/CvYXpq_vCli/",
    alt: "Skyllen Instagram Picture",
  },

  {
    image: image3,
    key: 3,
    url: "https://www.instagram.com/p/CunI6jeyI7o/?img_index=1",

    alt: "Skyllen Instagram Picture",
  },
  {
    image: image2,
    key: 2,
    url: "https://www.instagram.com/p/Ct-Kq0Uv3Pu/",
    alt: "Skyllen Instagram Picture",
  },
  // {
  //   image: image1,
  //   key: 1,
  //   url: "https://www.instagram.com/p/CrhBVDGvtX3/",

  //   alt: "Skyllen Instagram Picture",
  // },
];

export default async function SocialRetrieve(props) {

  return (
    <>
      <div className="social-media-container overflow-x-scroll">
        {content.map((el) => (
          <Link rel="noopener noreferrer" target="_blank" href={el.url}>
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 1 },
              }}
              className="social-media-content relative z-10 block"
              key={el.key}
            >
              <ContentfulImage
                src={el.image}
                fill={true}
                quality={50}
                alt={el.alt}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </>
  );
}

// export const getStaticProps = async () => {
//   const url = `https://graph.instagram.com/17895695668004550?fields=id,media_type,media_url,username,timestamp&access_token=${process.env.INSTAGRAM_KEY}`;
// //   const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
//   const data = await fetch(url);
//   const feed = await data.json();

//   console.log("this is feed data !!!!!" + feed);
// };
