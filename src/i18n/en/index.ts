import type { BaseTranslation } from "../i18n-types";
import P1 from "../../../public/images/dec7/P1.webp";
import P2 from "../../../public/images/dec7/20190118_618Carnarvon_Int_H6_0147 copy.webp";
import P3 from "../../../public/images/dec7/edition-close.webp";
import P4 from "../../../public/images/dec7/edition-wide.webp";

const en = {
  // TODO: your translations go here
  HEADER_PT_1: "EMINENT DESIGN",
  HEADER_PT_2: "MODERN EXPERIENCE",
  STORY1:
    "We're a multi-disciplinary Real Estate development firm focusing on developing properties that connect Nature, Architecture, Technology, and Functionality.",
  STORY2:
    "We are inspired by the evolving interpretations of urbanity and sustainability emerging from recent cityscapes.",
  STORY3:
    "We prioritizes smart design and distinct spaces to craft enduring homes and workplaces.",
  SOCIAL_HEADLINE: "Stay updated with us",
  SOCIAL_OVERLINE: "SOCIAL MEDIA",
  PROJECT_GALLERY_OVERLINE: "our projects",
  PROJECT_GALLERY_HEADLINE: "Smart Design and Distinct Spaces",
  SOCIAL_CTA: "Follow our social media",
  NOW_LEASING: "NOW LEASING",
  NOW_SELLING: "NOW SELLING",
  COMING_SOON: "COMING SOON",

  // NEWS
  NEWS_HEADER:
    "We are inspired by the evolving interpretations of urbanity and sustainability emerging from recent cityscapes.",
  NEWS_HEADER_OVERLINE: "NEWS",
  NEWS_SECTION_TITLE: "Stay updated with Skyllen",
  NEWS_SECTION_OVERLINE: "NEWS",

  // CONTACT
  CONTACT_HEADER: "Connect with Us.",
  CONTACT_HEADER_OVERRLINE: "CONTACT",
  CONTACT_FORM_FULL_NAME: "FULL NAME",
  CONTACT_FORM_EMAIL: "EMAIL ADDRESS",
  CONTACT_FORM_PHONE: "PHONE",
  CONTACT_FORM_POSTAL_CODE: "POSTAL CODE",
  CONTACT_FORM_Q_REALTOR: "ARE YOU A REALTOR",
  YES: "yes",
  NO: "no",
  CONTACT_FORM_EMPLOYER: "Employer/Brokerage", // not found
  CONTACT_FORM_DISCLAIMER:
    "I hereby consent to receive emails from Skyllen Pacific and their respective current and future affiliates and subsidiaries. This may include pricing, floor plans for current and future products, sales updates, event invitations, announcements, corporate newsletters, and other contact. I understand that I can unsubscribe at any time.", // not found


  // COMMON
  LEARN_MORE: "LEARN MORE",

  // PROJECTS
  // TODO: these are hard coded inside app/pprojects/page.tsx
  PROJECT_HEADLINE:
    "We prioritizes smart design and distinct spaces to craft enduring homes and workplaces.",
  PROJECT_OVERLINE: "PROJECT",
  PROJECT_618_EXCERPT:
    "An established neighbourhood connecting a rich past to a modern downtown lifestle - 618 Carnarvon provides an elevated lifestyle in the heart of New Westminster.",
  PROJECT_1650_EXCERPT:
    "A vibrant four-storey centerpiece providing bright showroom and office opportunities set in Kitsilano's trendiest business district.",
  PROJECT_EDITION_EXCERPT:
    "Nested amongst natural wonders and thriving streets, Skyllen Pacific's upcoming downtown project will offer beautiful views of Vancouver's vistas while boasting proximity to modern day conveniences and luxuries.",

  // PROJECT DETAILS
  PROJECT_DETAILS_STATUS: "STATUS",
  PROJECT_DETAILS_TYPE: "TYPE",
  PROJECT_DETAILS_LOCATION: "LOCATION",
  PROJECT_DETAILS_ESTIMATE: "ESTIMATED COMPLETION",
  PROJECT_DETAILS_HOMES: "HOMES",

  // COMPANY
  COMPANY_HEADER:
    "We're a multi-disciplinary Real Estate development firm focusing on developing properties that connect Nature, Architecture, Technology, and Functionality.",
  COMPANY_OVERLINE: "COMPANY",
  COMPANY_SECTION_TITLE: "Our History",
  COMPANY_SECTION_PARAGRAPH_1:
    "Since 2008, Skyllen Pacific has been active throughout Metro Vancouver observing market needs and acquiring lands in strategic parts of the region.",
  COMPANY_SECTION_PARAGRAPH_2:
    "With over thirty years of practiced expertise spanning across two continents, the Skyllen Group is committed to exceeding Vancouver's real estate development goals with quality homes that prioritize revolutionary design and thoughtful functionality.",
  COMPANY_PILLAR_ONE_TITLE: "INSPIRATION",
  COMPANY_PILLAR_ONE_PARAGRAPH_1:
    "Skyllen Pacific is inspired by the evolving interpretations of urbanity and sustainability emerging from recent cityscapes.",
  COMPANY_PILLAR_ONE_PARAGRAPH_2:
    "Valuing responsible investment, Skyllen champions sustainable practices during the management process to improve local infrastructure and public spaces.",
  COMPANY_PILLAR_TWO_TITLE: "COLLABORATION",
  COMPANY_PILLAR_TWO_PARAGRAPH_1:
    "Every Skyllen Pacific project involves thoughtful collaboration between project context and contemporary design.",
  COMPANY_PILLAR_TWO_PARAGRAPH_2:
    "Engaging experienced industry professionals, Skyllen leverages progressive research and development methods to propel creative solutions into high-quality results.",
  COMPANY_PILLAR_THREE_TITLE: "INNOVATION",
  COMPANY_PILLAR_THREE_PARAGRAPH_1:
    "An enriched life stems from innovative planning and design. Skyllen works with clients to transform ideas into actuality.",
  COMPANY_PILLAR_THREE_PARAGRAPH_2:
    "The firm’s dedication to early blueprinting sets the template for innovation, leading to conscientiously planned projects that radiate eminent design and modern experience.",
  COMPANY_TRAIN_SECTION_PARAGRAPH:
    "We are inspired by the evolving interpretations of urbanity and sustainability emerging from recent cityscapes.",
  COMPANY_PROJECT_MANAGEMENT_TITLE: "PROJECT MANAGEMENT",
  COMPANY_PROJECT_MANAGEMENT_PARAGRAPH_1:
    "Skyllen Pacific boasts years of experience managing detached residential, mixed-use, and commercial projects.",
  COMPANY_PROJECT_MANAGEMENT_PARAGRAPH_2:
    "With hands-on experience from project inception to completion, Skyllen is well-informed with the entire development process and is qualified to provide relevant insight for all types of projects.",
  COMPANY_DEVELOPMENT_TITLE: "DEVELOPMENT",
  COMPANY_DEVELOPMENT_PARAGRAPH_1:
    "Our end-to-end service model moves projects from concept to completion, with our expert teams collaborating every step of the way.",
  COMPANY_DEVELOPMENT_PARAGRAPH_2:
    "Our winning formula lies in how our in-house experts work together. Our integrated systems move projects from concept to completion, delivering on the promise we make to our customers, every time.",

  // FOOTER
  FOOTER_CONNECT: "LET'S CONNECT",
  FOOTER_PROJECTS: "PROJECTS",
  FOOTER_FOLLOW: "FOLLOW US",

  // MENU
  PROJECT: "Projects",
  COMPANY: "Company",
  NEWS: "News",
  CONTACT: "Contact",

  //618 Slug should be "618-carnavron"
  TEST_PROJECT_618_TITLE: "618 CARNAVRON",
  TEST_PROJECT_618_EXCERPT: "Community · Convienence",
  TEST_PROJECT_618_SLUG: "618-carnavron", // This is slug
  TEST_PROJECT_618_COVER_IMAGE: "https://i.imgur.com/wYTCtRu.jpeg",
  TEST_PROJECT_618_TYPE: "Residential | Office | Retail",
  TEST_PROJECT_618_COUNT: "262",
  TEST_PROJECT_618_STATUS: "Register Now",
  TEST_PROJECT_618_ESTIMATE: "Completed",
  TEST_PROJECT_618_LOCATION: "New Westminster, BC",
  TEST_PROJECT_618_WEBSITE: "http://www.618carnarvon.com",
  TEST_PROJECT_618_RENDER: "https://i.imgur.com/wYTCtRu.jpeg",
  TEST_PROJECT_618_PROJECT_DESCRIPTION:
    "An established neighbourhood connecting a rich past to a modern downtown lifestyle – 618 Carnarvon provides an elevated lifestyle in the heart of New Westminster.",
  TEST_PROJECT_618_PROJECT_IMAGE_ONE: "https://i.imgur.com/wYTCtRu.jpeg",
  TEST_PROJECT_618_PROJECT_IMAGE_TWO: "https://i.imgur.com/wYTCtRu.jpeg",
  TEST_PROJECT_618_PROJECT_IMAGE_THREE: "https://i.imgur.com/wYTCtRu.jpeg",
  TEST_PROJECT_618_PROJECT_IMAGE_FOUR: "https://i.imgur.com/wYTCtRu.jpeg",
  TEST_PROJECT_618_PROJECT_IMAGE_FIVE: "https://i.imgur.com/wYTCtRu.jpeg",
  TEST_PROJECT_618_BUBBLE_ONE:
    "Located in the heart of a pedestrian-oriented, transit-friendly community, 618 Carnarvon is conveniently set one block from Columbia Street, downtown New Westminster’s main street.",
  TEST_PROJECT_618_BUBBLE_TWO:
    "The homes at 618 Carnarvon are designed for modern urban living. Inspired by single-family homes, entrances lead into open living spaces for family activities with adjoining bedrooms providing privacy when preferred.",
  TEST_PROJECT_618_BUBBLE_THREE:
    "618 Carnarvon will provide over 30,000 square feet of landscaped green space exclusive to residents, as well as a corner pocket park accessible to the community.",
} satisfies BaseTranslation;

// 0: 618 Carnarvon
const en_project0 = {
  TITLE: "618 Carnavron",
  EXCERPT: "Community · Convenience",
  SLUG: "618-carnavron",
  TYPE: "Residential | Retail",
  COUNT: "262",
  STATUS: "Register Now",
  ESTIMATE: "Completed",
  LOCATION: "New Westminster, BC",
  PROJECT_DESCRIPTION:
    "An established neighbourhood connecting a rich past to a modern downtown lifestyle – 618 Carnarvon provides an elevated lifestyle in the heart of New Westminster.",
  BUBBLE_ONE:
    "Located in the heart of a pedestrian-oriented, transit-friendly community, 618 Carnarvon is conveniently set one block from Columbia Street, downtown New Westminster’s main street.",
  BUBBLE_TWO:
    "The homes at 618 Carnarvon are designed for modern urban living. Inspired by single-family homes, entrances lead into open living spaces for family activities with adjoining bedrooms providing privacy when preferred.",
  BUBBLE_THREE:
    "618 Carnarvon will provide over 30,000 square feet of landscaped green space exclusive to residents, as well as a corner pocket park accessible to the community.",
  COVER_IMAGE: "https://i.imgur.com/PPFrbgo.jpg",
  WEBSITE: "http://www.618carnarvon.com",
  WEBSITE_TEXT: "VISIT THE WEBSITE",
  WEBSITE_BTN_STATE: "",
  RENDER: "https://i.imgur.com/6YvLA11.jpg",
  PROJECT_IMAGE_ONE: "https://i.imgur.com/ls9Sob1.jpg",
  PROJECT_IMAGE_TWO: "https://i.imgur.com/tIMZDf5.png",
  PROJECT_IMAGE_THREE: "https://i.imgur.com/PBS1qoj.jpg",
  PROJECT_IMAGE_FOUR: "https://i.imgur.com/sie7QhV.jpg",
  PROJECT_IMAGE_FIVE: "https://i.imgur.com/Q2hfWf2.jpg",
  HOMEOWNER_CARE: "flex",
  HIDDEN_PROJECT: "",
} satisfies BaseTranslation;

// 1: 1650 West 2nd
const en_project1 = {
  TITLE: "1650 On Second",
  EXCERPT: "Work · Live · Nature",
  SLUG: "1650-on-second",
  TYPE: "Office | Retail",
  COUNT: "hidden",
  STATUS: "Now Leasing",
  ESTIMATE: "Completed",
  LOCATION: "Kitsilano, BC",
  PROJECT_DESCRIPTION:
    "A vibrant four-storey centerpiece providing bright showroom and office opportunities set in Kitsilano’s trendiest business district.",
  BUBBLE_ONE:
    "1650 On Second offers four-storeys of versatile office space complemented by two levels of underground parking. The first two floors provide 18,260 square feet of retail and showroom options, with 8,120 square feet on the ground floor and 10,140 square feet on the second.",
  BUBBLE_TWO:
    "Striving to revitalize West 2nd Avenue’s aged façade with a contemporary approach, 1650 On Second is thoughtfully designed to reflect the area’s vivid growth while preserving its creative heritage through the building’s bold architecture and vibrant accents. The floor-to-ceiling windows soften street context with full-frontage displays, providing abundant light flow and elegantly framing Vancouver’s verdant skyline.",
  BUBBLE_THREE:
    "The top two levels grant 9,800 square feet of bright office space featuring spectacular views of downtown Vancouver, exclusive rear outdoor patios, and a rooftop deck.",
  COVER_IMAGE: "https://i.imgur.com/sIcItF2.jpg",
  WEBSITE: "",
  WEBSITE_TEXT: "COMING SOON",
  WEBSITE_BTN_STATE: "hidden",
  RENDER: "https://i.imgur.com/sIcItF2.jpg",
  PROJECT_IMAGE_ONE: "https://i.imgur.com/vzOfDqp.jpg",
  PROJECT_IMAGE_TWO: "https://i.imgur.com/HsKibgO.jpg",
  PROJECT_IMAGE_THREE: "https://i.imgur.com/HfhKfI9.jpg",
  PROJECT_IMAGE_FOUR: "https://i.imgur.com/TgNvkys.jpg",
  PROJECT_IMAGE_FIVE: "https://i.imgur.com/zQU5GRI.jpg",
  HIDDEN_PROJECT: "",
} satisfies BaseTranslation;

// 2: Pendrell St
const en_project2 = {
  TITLE: "Edition",
  EXCERPT: "Community · Convenience",
  SLUG: "edition",
  TYPE: "Residential | Office | Retail",
  COUNT: "TBC",
  STATUS: "Coming Soon",
  ESTIMATE: "2026",
  LOCATION: "New Westminster, BC",
  PROJECT_DESCRIPTION:
    "Coming soon to downtown Vancouver",
  BUBBLE_ONE:
    "Located in the heart of a pedestrian-oriented, transit-friendly community, 618 Carnarvon is conveniently set one block from Columbia Street, downtown New Westminster’s main street.",
  BUBBLE_TWO:
    "The homes at 618 Carnarvon are designed for modern urban living. Inspired by single-family homes, entrances lead into open living spaces for family activities with adjoining bedrooms providing privacy when preferred.",
  BUBBLE_THREE:
    "618 Carnarvon will provide over 30,000 square feet of landscaped green space exclusive to residents, as well as a corner pocket park accessible to the community.",
  COVER_IMAGE: "https://i.imgur.com/mleUS0f.jpg",
  WEBSITE: "",
  WEBSITE_TEXT: "COMING SOON",
  WEBSITE_BTN_STATE: "no-select",
  RENDER: "https://i.imgur.com/KxcoCCf.png",
  PROJECT_IMAGE_ONE: "https://i.imgur.com/wYTCtRu.jpeg",
  PROJECT_IMAGE_TWO: "https://i.imgur.com/wYTCtRu.jpeg",
  PROJECT_IMAGE_THREE: "https://i.imgur.com/wYTCtRu.jpeg",
  PROJECT_IMAGE_FOUR: "https://i.imgur.com/wYTCtRu.jpeg",
  PROJECT_IMAGE_FIVE: "https://i.imgur.com/wYTCtRu.jpeg",
  HIDDEN_PROJECT: "hidden",
} satisfies BaseTranslation;

export default en;
export { en_project0, en_project1, en_project2 };
