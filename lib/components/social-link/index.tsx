import { FC } from "react";
import NextLink from "next/link";
import { LinkType } from "../helper/types";
import { SlGlobe as WebsiteIcon } from "react-icons/sl";
import { BsGithub as GitHubIcon } from "react-icons/bs";

interface SocialLinkProps extends LinkType {}
const SocialLink: FC<SocialLinkProps> = ({ title, href }) => {
  return (
    <NextLink
      href={href}
      className="flex items-center justify-center gap-3 text-lg text-gray-300 transition px-4 py-2 rounded-full font-semibold hover:bg-white hover:bg-opacity-45 hover:text-black hover:font-bold"
    >
      <div className="h-[18px] w-[18px]">
        {title === "Github" ? <GitHubIcon /> : <WebsiteIcon />}
      </div>
      {title}
    </NextLink>
  );
};

export default SocialLink;
