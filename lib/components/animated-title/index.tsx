"use client";
import { FC, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
}
const AnimatedTitle: FC<AnimatedTitleProps> = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <h2
      ref={ref}
      className="font-serif text-2xl font-thin text-slate-700 uppercase text-center my-4"
      style={{
        transform: isInView ? "" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "ease 0.7s",
      }}
    >
      {title}
    </h2>
  );
};

export default AnimatedTitle;
