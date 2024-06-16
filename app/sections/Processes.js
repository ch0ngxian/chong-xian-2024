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
      tags: ["Figma", "UI", "UX", "Responsive Design"],
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
      is_horizontal_revert: true,
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

  return (
    <section id="about-me">
      {sections.map((section, index) => (
        <div key={index}>
          {/* Desktop */}
          <div
            className={`hidden sm:flex mx-6 md:mx-10 py-24 box-content justify-evenly items-center ${
              section.is_horizontal_revert ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-[40%]">
              <div className="text-xl text-gray-500">In my daily work, I do</div>

              <h2 className="mt-3 text-5xl font-bold" style={{ color: section.color }}>
                {section.title}
              </h2>
              <p className="mt-5 text-xl">{section.description}</p>
              <div>
                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {section.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 rounded-full text-sm text-white font-medium opacity-40"
                      style={{ background: section.color }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <Image src={section.image.landscape_src} width={1024} height={1024} alt="Design"></Image>
            </div>
          </div>

          {/* Mobile */}
          <div key={index} className="flex-col sm:hidden mx-6 md:mx-10 py-24 box-content justify-evenly items-center">
            <div className="text-xl text-gray-500">In my daily work, I do</div>

            <h2 className="mt-3 text-5xl font-bold" style={{ color: section.color }}>
              {section.title}
            </h2>
            <Image class="mt-10" src={section.image.potrait_src} width={1024} height={1024} alt="Design"></Image>
            <p className="mt-5 text-xl">{section.description}</p>
            <div>
              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {section.tags.map((tag, index) => (
                  <div key={index} className="px-3 py-1 rounded-full text-sm text-white font-medium opacity-40" style={{ background: section.color }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
