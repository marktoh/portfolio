"use client";
import { FC, ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

import NextImage from "next/image";
import NextLink from "next/link";
import { LinkType } from "../helper/types";
import Background from "../../../public/backgrounds/social-background.jpg";

type SocialLinkType = LinkType & {
  icon: ReactNode;
};
const SocialLink: FC<SocialLinkType> = ({ title, href, icon }) => {
  return (
    <NextLink
      className="h-fit p-4 rounded-md flex items-center transition duration-500 cursor-pointer gap-4 bg-white bg-opacity-95 text-black hover:opacity-75"
      href={href}
    >
      <span className="h-6 w-6 px-4">{icon}</span>
      <span className="text-base font-semibold text-center w-full">
        Continue to {title}
      </span>
    </NextLink>
  );
};
interface SocialSectionProps {
  socialLinks: SocialLinkType[];
}
const SocialSection: FC<SocialSectionProps> = ({ socialLinks }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "1.2s",
      }}
    >
      <div className="relative h-[60dvh]">
        <NextImage src={Background} alt="" fill className="object-cover" />
      </div>
      <div className="h-[40dvh] bg-black">
        <div className="mx-auto max-w-2xl flex flex-col justify-end gap-6 px-2 sm:px-12 py-8">
          {socialLinks.map((link, idx) => (
            <SocialLink key={idx} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
