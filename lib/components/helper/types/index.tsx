import { LinkProps } from "next/link";
import { StaticImageData } from "next/image";

export type Link = LinkProps & {
  title: string;
};

export type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  website: string;
  github: string;
};
