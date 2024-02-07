import { FC } from "react";
import InformationLayer from "../../information-layer";
import { HeroType } from "../../helper/types";

type HeroInformation = Omit<HeroType, "image">;
const Information: FC<HeroInformation> = ({ title, description }) => {
  return (
    <InformationLayer>
      <h1 className="text-3xl text-white">{title}</h1>
      <p className="text-sm text-gray-300 text-balance">{description}</p>
    </InformationLayer>
  );
};

export { Information };
