"use client";
import "./ProjectCard.css";

import Image from "next/image";

export default function ProjectCard({ title, description, iconUrl, iconBackground, url, imageUrl }) {
  return (
    <div className="hover:scale-105 transition ease-in-out relative glow mr-8 cursor-pointer">
      <a className="flex" href={url} target="_blank">
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-[#333333]">
          <div className="h-7 w-full bg-white dark:bg-[#111111] flex items-center border-b dark:border-[#333333]">
            <div className="rounded-full h-2.5 w-2.5 bg-[#FF5F57] ml-3"></div>
            <div className="rounded-full h-2.5 w-2.5 bg-[#FEBC2E] ml-1"></div>
            <div className="rounded-full h-2.5 w-2.5 bg-[#28C840] ml-1"></div>
          </div>
          <div className="preview-wrapper relative">
            {url && (
              <iframe
                className="pointer-events-none rounded-b-lg"
                style={{ transformOrigin: "0 0", transform: "scale(0.7)" }}
                width="143%"
                height="143%"
                src={url}
              ></iframe>
            )}
            {imageUrl && <Image src={imageUrl} alt="" width={512} height={512} className="rounded-b-lg" />}

            <div className="text-white absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-5 rounded-b-lg">
              <Image
                className="h-10 w-10 border border-white dark:border-[#333333] rounded mb-3 object-cover"
                style={{ backgroundColor: iconBackground }}
                src={iconUrl}
                width={40}
                height={40}
                alt=""
              />
              <div className="text-lg font-medium mb-2">{title}</div>
              <div className="text-xs font-light text-gray-400">{description}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
