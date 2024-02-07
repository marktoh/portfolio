import { FC } from "react";

import SocialLink from "../../social-link";
import InformationLayer from "../../information-layer";

import { ProjectType } from "../../helper/types";

type ProjectInformation = Omit<ProjectType, "image">;
const Information: FC<ProjectInformation> = ({
  title,
  description,
  website,
  github,
}) => {
  return (
    <InformationLayer opacity="dark">
      <div className="mt-1 flex flex-col">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-1 text-gray-300 text-base">{description}</p>
      </div>
      <div className="mt-1.5 flex gap-1">
        {website && <SocialLink title="Website" href={website} />}
        {github && <SocialLink title="Github" href={github} />}
      </div>
    </InformationLayer>
  );
};

export { Information };
