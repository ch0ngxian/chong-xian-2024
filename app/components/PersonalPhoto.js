"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function PersonalPhoto({ imageFilenames }) {
  const [photoText, setPhotoText] = useState("Random photo of me");
  const [randomPhotoIndex, setRandomPhotoIndex] = useState(Math.floor(Math.random() * imageFilenames.length));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);

  const photo = React.useMemo(
    () => (
      <Image
        className="mb-2 sm:px-2"
        key={imageFilenames[randomPhotoIndex]}
        width={isMobile ? (285 * 3) / 4 : 285}
        height={isMobile ? (320 * 3) / 4 : 320}
        src={`/images/me/${imageFilenames[randomPhotoIndex]}`}
        alt="Chong Xian's Photo"
      />
    ),
    [imageFilenames, randomPhotoIndex, isMobile]
  );

  const nextRandomPhotoIndex = () => {
    let newIndex = Math.floor(Math.random() * imageFilenames.length);
    if (newIndex === randomPhotoIndex) {
      newIndex = (newIndex + 1) % imageFilenames.length;
    }
    setRandomPhotoIndex(newIndex);
  };
  return (
    <div className="text-right select-none w-fit">
      {photo}
      <div
        className="flex justify-between items-center px-2 py-1 rounded-full hover:cursor-pointer hover:bg-gray-100"
        onMouseEnter={() => {
          setPhotoText("Another one");
        }}
        onMouseLeave={() => {
          setPhotoText("Random photo of me");
        }}
        onClick={nextRandomPhotoIndex}
      >
        <Image width={20} height={20} src="/images/icons/refresh.svg" alt="Refresh" />
        <span className="md:text-xl pr-2">{photoText}</span>
      </div>
    </div>
  );
}
