import { FC } from "react";
import NextLink from "next/link";
import { Link } from "../helper/types";
import ArrowUpRight from "../../../public/assets/icons/arrow-up-right";

const SocialLink: FC<Link> = ({ title, href }) => {
  return (
    <NextLink
      href={href}
      className="flex items-center text-sm text-gray-400 hover:underline hover:text-blue-700 transition"
    >
      {title}
      <ArrowUpRight />
    </NextLink>
  );
};

export default SocialLink;
