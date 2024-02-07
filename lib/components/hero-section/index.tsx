"use client";
import { FC, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Information } from "./helper";
import { HeroType } from "../helper/types";

const HeroSection: FC<HeroType> = ({ image, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "ease 0.7s",
      }}
    >
      <div className="relative">
        <Image
          className="object-[20%] md:object-[30%] object-cover"
          src={image}
          alt={title}
          fill
        />
        <Information title={title} description={description} />
      </div>
    </section>
  );
};

export default HeroSection;
