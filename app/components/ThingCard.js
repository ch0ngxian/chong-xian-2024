"use client";

import Image from "next/image";
import { useState } from "react";

export default function ThingCard({ title, description, url, image_url }) {
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
      <div className="absolute left-5 bottom-5 m-auto text-white transition-opacity z-50" style={{ opacity: isHovered ? 1 : 0 }}>
        <div className="font-medium text-lg ">{title}</div>
        {description && <div className="font-light">{description}</div>}
      </div>

      <Image key={title} width={512} height={512} style={{ width: "100%", height: "auto" }} src={image_url} alt="" />
    </div>
  );
}
