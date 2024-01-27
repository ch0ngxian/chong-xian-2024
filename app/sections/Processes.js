"use client";

import Image from "next/image";
import { useState } from "react";

export default function Processes() {
  const [showingSection, setShowingSection] = useState("develop");

  return (
    <section className="mx-10 my-10 flex justify-between items-center h-screen">
      <div className="flex flex-col justify-center">
        <h1 className="text-xl">In my daily work, I do</h1>
        <div className="my-5">
          <div
            className={`text-5xl font-bold my-6 ${showingSection == "design" ? "text-[#9747FF]" : "text-gray-200"}`}
            onClick={() => setShowingSection("design")}
          >
            Design
          </div>
          <div
            className={`text-5xl font-bold my-6 ${showingSection == "develop" ? "text-[#0085FF]" : "text-gray-200"}`}
            onClick={() => setShowingSection("develop")}
          >
            Develop
          </div>
          <div
            className={`text-5xl font-bold my-6 ${showingSection == "empower" ? "text-[#E19A0B]" : "text-gray-200"}`}
            onClick={() => setShowingSection("empower")}
          >
            Empower
          </div>
        </div>
        <div class="text-xl mt-10">Passionate on drawing clean UI design and provide easy to use experience</div>
        <div className="mt-5">
          <div className="px-5 py-1 rounded-full bg-gray-200 w-fit">Figma</div>
        </div>
      </div>
      <div className="w-6/11">
        {showingSection == "design" && (
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
        {showingSection == "develop" && (
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
        {showingSection == "empower" && (
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
