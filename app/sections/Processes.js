"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Processes() {
  const sections = [
    {
      title: "Design",
      type: "design",
      color: "#9747FF",
      description: "Passionate on drawing clean UI design and provide easy to use experience",
      tags: ["Figma"],
      image: {
        src: "/images/processes/design.png",
        alt: "Design",
        border_color: "#DBBFFF",
        background_color: "#FCFAFF",
      },
    },
    {
      title: "Develop",
      type: "develop",
      color: "#0085FF",
      description: "Solve and implement the solution that performance optimised",
      tags: ["Vue.js", "React", "Laravel", "Ruby on Rails", "MySQL", "AWS"],
      image: {
        src: "/images/processes/develop.png",
        alt: "Develop",
        border_color: "#85C5FF",
        background_color: "#E9F5FF",
      },
    },
    {
      title: "Empower",
      type: "empower",
      color: "#E19A0B",
      description: "Empower the team with the right tools and knowledge",
      tags: ["Scrum", "Communication", "Leadership"],
      image: {
        src: "/images/processes/empower.png",
        alt: "Empower",
        border_color: "#FFE28C",
        background_color: "#FFFCF2",
      },
    },
  ];
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSectionIndex((activeSectionIndex + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSectionIndex, sections.length]);

  return (
    <section className="mx-10 my-10 pt-10 flex justify-between h-screen box-content">
      <div className="w-[40%] pr-10 mt-20">
        <h1 className="text-xl">In my daily work, I do</h1>
        <div className="my-5">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`cursor-pointer text-5xl font-bold my-6 ${activeSectionIndex == index ? `text-[${section.color}]` : "text-gray-200"}`}
              onClick={() => setActiveSectionIndex(index)}
            >
              {section.title}
            </div>
          ))}
        </div>
        <div className="text-xl mt-10">{sections[activeSectionIndex].description}</div>
        <div className="mt-5 flex flex-wrap">
          {sections[activeSectionIndex].tags.map((tag, index) => (
            <div key={index} className="px-5 py-1 rounded-full bg-gray-200 w-fit mr-2 mb-3">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[60%] box-border">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`mr-10 bg-[${section.image.background_color}] rounded-lg border border-[${section.image.border_color}] absolute transition-opacity duration-500`}
            style={{ opacity: activeSectionIndex == index ? 1 : 0 }}
          >
            <Image width={1024} height={1024} style={{ width: "100%", height: "auto" }} src={section.image.src} alt={section.image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
