"use client";
import { FC, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { Project } from "../helper/types";
import SocialLink from "../social-link";

const ProjectCard: FC<Project> = ({
  title,
  description,
  image,
  website,
  github,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="w-[300px] md:w-[450px] flex flex-col"
      style={{
        opacity: isInView ? 1 : 0,
        transition: "1.2s",
      }}
    >
      <NextLink
        href={website || github}
        className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] md:justify-self-end hover:opacity-75 cursor-pointer"
      >
        <Image className="object-cover" src={image} alt="" fill />
      </NextLink>
      <div className="mt-1 flex flex-col md:self-start">
        <h2 className="font-serif text-xl font-semibold text-slate-700">
          {title}
        </h2>
        <p className="text-slate-500">{description}</p>
      </div>
      <div className="mt-0.5 flex gap-1">
        {website && <SocialLink title="Website" href={website} />}
        {github && <SocialLink title="Github" href={github} />}
      </div>
    </div>
  );
};

export default ProjectCard;
