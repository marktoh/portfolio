import { LinkProps } from "next/link";
import { StaticImageData } from "next/image";

export type LinkType = LinkProps & {
  title: string;
};

export type ProjectType = {
  title: string;
  description: string;
  image: StaticImageData;
  website: string;
  github: string;
};

export type HeroType = {
  image: StaticImageData;
  title: string;
  description: string;
};
