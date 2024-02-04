import { FC } from "react";
import { Project } from "../helper/types";
import ProjectCard from "../project-card";
import AnimatedTitle from "../animated-title";

interface ProjectSectionProps {
  projects: Project[];
}
const ProjectSection: FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section>
      <AnimatedTitle title="PORTFOLIO" />
      <div className="mx-auto max-w-5xl justify-center flex flex-col items-center gap-2 min-h-[40vh]">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
