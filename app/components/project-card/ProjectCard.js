"use client";
import { useEffect, useRef, useState } from "react";
import "./ProjectCard.css";

import Image from "next/image";

export default function ProjectCard({ title, description, iconUrl, iconBackground, url, imageUrl, type, onClick }) {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const cursorRef = useRef(null);
  const cursorWrapperRef = useRef(null);

  const onMouseMove = (e) => {
    const cursor = cursorRef.current;

    cursor.style.left = `${e.clientX - cursorWrapperRef.current.getBoundingClientRect().left - 45}px`;
    cursor.style.top = `${e.clientY - cursorWrapperRef.current.getBoundingClientRect().top - 45}px`;
  };

  const onMouseLeave = () => {
    const cursor = cursorRef.current;
    cursor.style.opacity = 0;
  };

  const onMouseEnter = () => {
    const cursor = cursorRef.current;
    cursor.style.opacity = 1;
  };

  return (
    <div className="hover:scale-105 transition ease-in-out relative glow mr-8 cursor-pointer" onClick={onClick}>
      <a className="flex" href={url} target="_blank">
        <div
          ref={cursorWrapperRef}
          className="absolute action-wrapper w-full h-full bg-transparent z-50"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
        >
          <div ref={cursorRef} className="absolute w-16 h-16 rounded-full z-50 bg-white border border-gray-200 opacity-0 transition-opacity"></div>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <div className="h-7 w-full bg-white flex items-center border-b border-gray-200">
            <div className="rounded-full h-2.5 w-2.5 bg-[#FF5F57] ml-3"></div>
            <div className="rounded-full h-2.5 w-2.5 bg-[#FEBC2E] ml-1"></div>
            <div className="rounded-full h-2.5 w-2.5 bg-[#28C840] ml-1"></div>
          </div>
          <div className="preview-wrapper relative">
            {imageUrl && <Image src={imageUrl} alt="" width={512} height={512} className="rounded-b-lg" />}

            <div className="text-white absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-5 rounded-b-lg">
              <div className="relative h-fit">
                <Image
                  className="h-10 w-10 border border-white rounded-md mb-3 object-cover"
                  style={{ backgroundColor: iconBackground }}
                  src={iconUrl}
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <div className="text-lg font-medium mb-2">{title}</div>
              <div className="text-sm opacity-60">{description}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
