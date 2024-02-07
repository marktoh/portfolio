import { FC } from "react";
import { ProjectType } from "../helper/types";
import ProjectCard from "../project-card";

interface ProjectSectionProps {
  projects: ProjectType[];
}
const ProjectSection: FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </>
  );
};

export default ProjectSection;
