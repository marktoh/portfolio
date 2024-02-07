"use client";
import { FC, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { ProjectType } from "../helper/types";
import { Information } from "./helper";

const ProjectCard: FC<ProjectType> = ({
  title,
  description,
  image,
  website,
  github,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "1.2s",
      }}
    >
      <div className="relative">
        <Image className="object-cover" src={image} alt={title} fill />
        <Information
          title={title}
          description={description}
          website={website}
          github={github}
        />
      </div>
    </section>
  );
};

export default ProjectCard;
