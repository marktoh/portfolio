import FigmaResponsiveMusicStoreDesktop from "../public/backgrounds/figma-responsive-music-store-desktop.png";
import FigmaResponsiveMusicStoreMobile from "../public/backgrounds/figma-responsive-music-store-mobile.png";

import LotusOxfordDesktop from "../public/backgrounds/lotus-oxford-desktop.png";
import LotusOxfordMobile from "../public/backgrounds/lotus-oxford-desktop.png";

import PhotographyDesktop from "../public/backgrounds/photography-desktop.jpg";
import PhotographyMobile from "../public/backgrounds/photography-mobile.png";

import DotaDrafterDesktop from "../public/backgrounds/dota-drafter-desktop.jpg";
import DotaDrafterMobile from "../public/backgrounds/dota-drafter-mobile.jpg";

import ResumeCreatorDesktop from "../public/backgrounds/resume-creator-desktop.png";
import ResumeCreatorMobile from "../public/backgrounds/resume-creator-mobile.png";

import DesignSystemDesktop from "../public/backgrounds/design-system-desktop.jpg";
import DesignSystemMobile from "../public/backgrounds/design-system-mobile.png";

import OpenF1Desktop from "../public/backgrounds/open-f1-desktop.jpg";
import OpenF1Mobile from "../public/backgrounds/open-f1-mobile.png";

import { ProjectType } from "@/lib/components/helper/types";

const projects: ProjectType[] = [
  {
    title: "Figma Responsive Music Store",
    description:
      "A responsive music store website built with TailwindCSS, Next.js, and Storybook based on Figma",
    image: {
      desktop: FigmaResponsiveMusicStoreDesktop,
      mobile: FigmaResponsiveMusicStoreMobile,
    },
    website: "https://figma-responsive-music-store.vercel.app/",
    github: "https://github.com/marktoh/figma-responsive-music-store",
  },
  {
    title: "Lotus Oxford",
    description: "An e-commerce website for wholesalers",
    image: {
      desktop: LotusOxfordDesktop,
      mobile: LotusOxfordMobile,
    },
    website: "https://www.lotusoxford.com/",
    github: "",
  },
  {
    title: "marktoh.com",
    description: "A photography e-commerce website for Mark Toh",
    image: {
      desktop: PhotographyDesktop,
      mobile: PhotographyMobile,
    },
    website: "https://www.marktoh.com/",
    github: "https://github.com/marktoh/mumbo-photography",
  },
  {
    title: "Dota Drafter",
    description: "A tool for recording Dota Drafts",
    image: {
      desktop: DotaDrafterDesktop,
      mobile: DotaDrafterMobile,
    },
    website: "https://dota-drafter-beta.vercel.app/",
    github: "https://github.com/marktoh/dota-drafter",
  },

  {
    title: "Resume Creator",
    description: "A tool for creating a resume",
    image: {
      desktop: ResumeCreatorDesktop,
      mobile: ResumeCreatorMobile,
    },
    website: "https://resume-marktoh.vercel.app/",
    github: "https://github.com/marktoh/resume-creator",
  },
  {
    title: "Design System",
    description: "A design system for Mumbo",
    image: {
      desktop: DesignSystemDesktop,
      mobile: DesignSystemMobile,
    },
    website: "",
    github: "https://github.com/marktoh/design-system",
  },
  {
    title: "Open F1",
    description: "A tool to track F1 circuits since 1950",
    image: {
      desktop: OpenF1Desktop,
      mobile: OpenF1Mobile,
    },
    website: "https://marktoh.github.io/open-f1/",
    github: "https://github.com/marktoh/open-f1",
  },
];

export default projects;
