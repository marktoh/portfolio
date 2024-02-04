import OpenF1 from "../public/open-f1.png";
import Photography from "../public/mark-toh-portrait.png";
import DotaDrafter from "../public/dota-drafter-portrait.png";
import ResumeCreator from "../public/resume-creator.png";
import DesignSystem from "../public/design-system.png";
import Marketplace from "../public/marketplace-portrait-2.png";

import { Project } from "@/lib/components/helper/types";

const projects: Project[] = [
  {
    title: "Lotus Oxford",
    description: "An e-commerce website for wholesalers",
    image: Marketplace,
    website: "https://www.lotusoxford.com/",
    github: "",
  },
  {
    title: "marktoh.com",
    description: "A photography e-commerce website for Mark Toh",
    image: Photography,
    website: "https://www.marktoh.com/",
    github: "https://github.com/marktoh/mumbo-photography",
  },
  {
    title: "Dota Drafter",
    description: "A tool for recording Dota Drafts",
    image: DotaDrafter,
    website: "https://dota-drafter-beta.vercel.app/",
    github: "https://github.com/marktoh/dota-drafter",
  },

  {
    title: "Resume Creator",
    description: "A tool for creating a resume",
    image: ResumeCreator,
    website: "https://resume-marktoh.vercel.app/",
    github: "https://github.com/marktoh/resume-creator",
  },
  {
    title: "Design System",
    description: "A design system for Mumbo",
    image: DesignSystem,
    website: "",
    github: "https://github.com/marktoh/design-system",
  },
  {
    title: "Open F1",
    description: "A tool to track F1 circuits since 1950",
    image: OpenF1,
    website: "https://marktoh.github.io/open-f1/",
    github: "https://github.com/marktoh/open-f1",
  },
];

export default projects;
