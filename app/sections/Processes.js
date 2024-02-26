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
        landscape_src: "/images/processes/design-landscape.png",
        potrait_src: "/images/processes/design-potrait.png",
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
        landscape_src: "/images/processes/develop-landscape.png",
        potrait_src: "/images/processes/develop-potrait.png",
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
        landscape_src: "/images/processes/empower-landscape.png",
        potrait_src: "/images/processes/empower-potrait.png",
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
    <section className="mx-6 md:mx-10 min-h-screen box-content">
      {/* Desktop */}
      <div className="hidden sm:flex my-10 pt-10 flex-row justify-between">
        <div className="w-[40%] pr-10 mt-20">
          <h1 className="text-xl">In my daily work, I do</h1>
          <div className="my-5">
            {sections.map((section, index) => (
              <div
                key={index}
                className={"cursor-pointer text-5xl font-bold my-6 text-gray-200"}
                style={{ color: activeSectionIndex == index ? section.color : "" }}
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
        <div className="w-[60%] box-border sm:mt-52 md:mt-32 lg:mt-16 xl:mt-0">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`mr-10 rounded-lg border absolute transition-opacity duration-500`}
              style={
                activeSectionIndex == index
                  ? {
                      opacity: 1,
                      background: section.image.background_color,
                      borderColor: section.image.border_color,
                    }
                  : {
                      opacity: 0,
                    }
              }
            >
              <Image width={1024} height={1024} style={{ width: "100%", height: "auto" }} src={section.image.landscape_src} alt={section.image.alt} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden mt-10 mb-20 h-full">
        <h1 className="text-xl">In my daily work, I do</h1>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${activeSectionIndex == index ? "" : "hidden"} cursor-pointer text-4xl font-bold mt-3 mb-6 text-gray-200`}
            style={{ color: activeSectionIndex == index ? section.color : "" }}
            onClick={() => setActiveSectionIndex(index)}
          >
            {section.title}
          </div>
        ))}

        {sections.map((section, index) => (
          <div
            key={index}
            className={`mr-6 rounded-lg border absolute transition-opacity duration-500`}
            style={
              activeSectionIndex == index
                ? {
                    opacity: 1,
                    background: section.image.background_color,
                    borderColor: section.image.border_color,
                  }
                : {
                    opacity: 0,
                  }
            }
          >
            <Image width={1024} height={1024} style={{ width: "100%", height: "auto" }} src={section.image.potrait_src} alt={section.image.alt} />
          </div>
        ))}
        <div className={`rounded-lg border invisible`}>
          <Image
            width={1024}
            height={1024}
            style={{ width: "100%", height: "auto" }}
            src={sections[0].image.potrait_src}
            alt={sections[0].image.alt}
          />
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
    </section>
  );
}
