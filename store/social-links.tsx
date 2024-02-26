import {
  BsGithub as GitHubIcon,
  BsLinkedin as LinkedInIcon,
  BsFileEarmarkPdf as ResumeIcon,
} from "react-icons/bs";

export default [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/mark-toh/",
    icon: <LinkedInIcon className="h-6 w-6" />,
  },
  {
    title: "Github",
    href: "https://github.com/marktoh",
    icon: <GitHubIcon className="h-6 w-6" />,
  },
  {
    title: "Resume",
    href: "https://resume-marktoh.vercel.app/resume.pdf",
    icon: <ResumeIcon className="h-6 w-6" />,
  },
];
