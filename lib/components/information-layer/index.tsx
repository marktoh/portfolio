import { FC, ReactNode } from "react";
interface InformationLayerProps {
  children: ReactNode;
  opacity?: "light" | "dark";
}
const InformationLayer: FC<InformationLayerProps> = ({
  children,
  opacity = "light",
}) => {
  let className = `relative h-screen w-screen flex flex-col justify-center z-10 p-[12%] bg-black`;
  className += opacity === "light" ? " bg-opacity-50" : " bg-opacity-75";
  return <div className={className}>{children}</div>;
};

export default InformationLayer;
