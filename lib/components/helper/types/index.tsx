import { LinkProps } from "next/link";
import { StaticImageData } from "next/image";

export type LinkType = LinkProps & {
  title: string;
};

export type ResponsiveImageType = {
  desktop: StaticImageData;
  mobile: StaticImageData;
};

export type ProjectType = {
  title: string;
  description: string;
  image: ResponsiveImageType;
  website: string;
  github: string;
};

export type HeroType = {
  image: StaticImageData;
  title: string;
  description: string;
};
