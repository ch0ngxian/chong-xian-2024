"use client";

import Image from "next/image";
import { useState } from "react";

export default function Processes() {
  const sections = [
    {
      title: "Design",
      type: "design",
      color: "#9747FF",
      description: "Passionate on drawing clean UI design and provide easy to use experience",
      tags: ["Figma"],
    },
    {
      title: "Develop",
      type: "develop",
      color: "#0085FF",
      description: "Solve and implement the solution that performance optimised",
      tags: ["Vue.js", "React", "Laravel", "Ruby on Rails", "MySQL", "AWS"],
    },
    {
      title: "Empower",
      type: "empower",
      color: "#E19A0B",
      description: "Empower the team with the right tools and knowledge",
      tags: ["Scrum", "Communication", "Leadership"],
    },
  ];
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  return (
    <section className="mx-10 my-10 flex justify-between items-center h-screen">
      <div className="flex flex-col justify-center">
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
        <div className="text-xl mt-10">Passionate on drawing clean UI design and provide easy to use experience</div>
        <div className="mt-5">
          <div className="px-5 py-1 rounded-full bg-gray-200 w-fit">Figma</div>
        </div>
      </div>
      <div className="w-6/11">
        {sections[activeSectionIndex].type == "design" && (
          <div className="bg-[#FCFAFF] ml-10 rounded-lg border border-[#DBBFFF] h-fit relative z-[-1]">
            <Image
              className="mb-2"
              width={1024}
              height={1024}
              style={{ width: "100%", height: "auto" }}
              src={`/images/processes/design.png`}
              alt=""
            />
            <div
              className="w-10/12 h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center -z-10"
              style={{
                borderRadius: "60rem",
                background: "radial-gradient(50% 50% at 50% 50%, #E4D0FF 43%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            ></div>
          </div>
        )}
        {sections[activeSectionIndex].type == "develop" && (
          <div className="bg-[#E9F5FF] ml-10 rounded-lg border border-[#85C5FF] h-fit">
            <Image
              className="mb-2"
              width={1024}
              height={1024}
              style={{ width: "100%", height: "auto" }}
              src={`/images/processes/develop.png`}
              alt=""
            />
          </div>
        )}
        {sections[activeSectionIndex].type == "empower" && (
          <div className="bg-[#FFFCF2] ml-10 rounded-lg border border-[#FFE28C] h-fit">
            <Image
              className="mb-2"
              width={1024}
              height={1024}
              style={{ width: "100%", height: "auto" }}
              src={`/images/processes/empower.png`}
              alt=""
            />
          </div>
        )}
      </div>
    </section>
  );
}
