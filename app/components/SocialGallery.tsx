"use client";
import Headline from "./headline";
import Link from "next/link";
import { getLocalizedMessages } from "@/src/i18n";

type Props = {
  children?: React.ReactNode;
};

const SocialGallery = ({ children }: Props) => {
  const localizedMessages = getLocalizedMessages();

  return (
    <>
      <Headline
        overline={localizedMessages.SOCIAL_OVERLINE}
        title={localizedMessages.SOCIAL_HEADLINE}
      />
      {children}
      <div className="mt-8 underscore-cta ">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/skyllenpacific/"
        >
          {localizedMessages.SOCIAL_CTA}{" "}
        </Link>
      </div>
    </>
  );
};

export default SocialGallery;
