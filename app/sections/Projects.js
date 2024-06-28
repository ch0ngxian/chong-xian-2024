"use client";

import { useState } from "react";
import VideoModal from "../components/VideoModal";
import ProjectCard from "../components/project-card/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "EasyStore Internal Chrome Extension",
      description: "Quick access tool for EasyStore teammates that show analytics",
      imageUrl: "/images/projects/chrome-extension/preview.png",
      iconUrl: "/images/projects/chrome-extension/web-store-icon.png",
      videoUrl: "https://www.youtube.com/embed/MTWDtjDOGck",
      type: "video",
    },
    {
      title: "JSONer | A minimalist JSON beautifier",
      description: "JSONer helps to format the input JSON and beautify it to display in a more readable way.",
      imageUrl: "/images/projects/jsoner-preview.png",
      url: "https://www.jsoner.app/",
      iconUrl: "https://www.jsoner.app/favicon.ico",
      type: "link",
    },
    {
      title: "Scrum Poker | Simple Way to Story Point",
      description: "Scrum Poker helps to estimate the story point of a task in a more fun and engaging way.",
      url: "https://scrumpoker.chongxian.dev/",
      imageUrl: "/images/projects/scrum-poker-preview.png",
      iconUrl: "https://scrumpoker.chongxian.dev/favicon.ico",
      iconBackground: "#FFFFFF",
      type: "link",
    },
    {
      title: "EasyStore Double Eleven Festival Page 2023",
      description: "Real-time sales monitoring page for Double Eleven Festival 2023.",
      imageUrl: "/images/projects/double-eleven/preview-2023.png",
      iconUrl: "/images/projects/double-eleven/easystore-logo-icon.svg",
      videoUrl: "https://www.youtube.com/embed/nzXmwysxo5Y",
      type: "video",
    },
    {
      title: "EasyStore Double Eleven Festival Page 2022",
      description: "Real-time sales monitoring page for Double Eleven Festival 2022.",
      imageUrl: "/images/projects/double-eleven/preview-2022.png",
      iconUrl: "/images/projects/double-eleven/easystore-logo-icon.svg",
      videoUrl: "https://www.youtube.com/embed/3UieV-l5xwE",
      type: "video",
    },
    {
      title: "Draw a Line | Easy line graph illustrating tool",
      description: "Get elegant and highly customized line graph in a glance.",
      url: "https://draw-a-line.chongxian.dev/",
      imageUrl: "/images/projects/draw-a-line-preview.png",
      iconUrl: "https://draw-a-line.chongxian.dev/logo.svg",
      type: "link",
    },
  ];

  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);

  return (
    <section id="projects" className="w-screen pt-24">
      <h3 className="text-3xl font-medium mb-5 px-6 md:px-10">Projects</h3>
      <div className="flex w-screen box-border overflow-x-scroll overflow-y-hidden px-6 md:px-10 py-36 -mt-36">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            onClick={() => (project.type == "video" && project.videoUrl ? setCurrentVideoUrl(project.videoUrl) : null)}
            {...project}
          />
        ))}
      </div>

      {currentVideoUrl && <VideoModal videoUrl={currentVideoUrl} onClose={() => setCurrentVideoUrl(null)} />}
    </section>
  );
}
