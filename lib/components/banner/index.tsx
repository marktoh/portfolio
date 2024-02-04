"use client";
import { FC, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Portrait from "@/public/portrait2.png";

const Banner: FC = () => {
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
      <div className="relative flex items-center justify-center h-[15vh] md:h-[30vh] bg-gray-800">
        <Image
          className="object-[30%] md:object-[0%] object-cover aspect-video"
          src={Portrait}
          alt=""
          fill
        />
      </div>
    </section>
  );
};

export default Banner;
