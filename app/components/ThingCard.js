"use client";

import Image from "next/image";
import { useState } from "react";

export default function ThingCard({ filename }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative hover-filter"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div
        className="absolute left-0 right-0 top-0 bottom-0 m-auto w-60 h-10 font-medium text-lg text-white transition-opacity z-50"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        {filename}
      </div>
      <Image key={filename} width={512} height={512} style={{ width: "100%", height: "auto" }} src={`/images/things-i-love/${filename}`} alt="" />
    </div>
  );
}
