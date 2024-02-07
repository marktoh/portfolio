import { FC } from "react";
import NextLink from "next/link";
import { LinkType } from "../helper/types";
import ArrowUpRight from "../../../public/assets/icons/arrow-up-right";

const SocialLink: FC<LinkType> = ({ title, href }) => {
  return (
    <NextLink
      href={href}
      className="flex items-center text-xs text-gray-300 hover:underline hover:text-blue-300 transition"
    >
      {title}
      <ArrowUpRight />
    </NextLink>
  );
};

export default SocialLink;
