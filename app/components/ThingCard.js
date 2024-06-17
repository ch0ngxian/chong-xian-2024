"use client";

import Image from "next/image";
import { useState } from "react";

export default function ThingCard({ title, description, url, image_url }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative hover-filter cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div
        className="absolute left-3 right-3 bottom-3 md:left-5 md:bottom-5 md:right-5 m-auto text-white transition-opacity z-50"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <div className="font-medium md:text-lg">{title}</div>
        {description && <div className="opacity-70 text-sm md:text-base">{description}</div>}
      </div>

      <Image key={title} width={512} height={512} style={{ width: "100%", height: "auto" }} src={image_url} alt="" />
    </div>
  );
}
