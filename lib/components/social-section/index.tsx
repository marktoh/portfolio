"use client";
import { FC, useRef } from "react";
import { useInView } from "framer-motion";
import NextLink from "next/link";
import { LinkType } from "../helper/types";

interface SocialSectionProps {
  socialLinks: LinkType[];
}
const SocialSection: FC<SocialSectionProps> = ({ socialLinks }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center gap-2">
        {socialLinks?.map((e, idx) => (
          <div
            key={idx}
            ref={ref}
            style={{
              opacity: isInView ? 1 : 0,
              transition: `ease ${idx * 3.5}s`,
            }}
          >
            <NextLink
              className="text-2xl font-extralight text-gray-500 hover:text-blue-700 hover:underline transition"
              href={e.href}
            >
              {e.title}
            </NextLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;
