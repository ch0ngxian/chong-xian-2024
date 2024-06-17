import ProjectCard from "../components/project-card/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "EasyStore Internal Chrome Extension",
      description: "Quick access tool for EasyStore teammates that show analytics",
      imageUrl: "/images/projects/chrome-extension/preview.png",
      iconUrl: "/images/projects/chrome-extension/web-store-icon.png",
    },
    {
      title: "JSONer | A minimalist JSON beautifier",
      description: "JSONer helps to format the input JSON and beautify it to display in a more readable way.",
      url: "https://www.jsoner.app/",
      iconUrl: "https://www.jsoner.app/favicon.ico",
    },
    {
      title: "Scrum Poker | Simple Way to Story Point",
      description: "Scrum Poker helps to estimate the story point of a task in a more fun and engaging way.",
      url: "https://scrumpoker.chongxian.dev/",
      iconUrl: "https://scrumpoker.chongxian.dev/favicon.ico",
      iconBackground: "#FFFFFF",
    },
    {
      title: "EasyStore Double Eleven Festival Page 2023",
      description: "Real-time sales monitoring page for Double Eleven Festival 2023.",
      videoUrl: "/images/projects/double-eleven/preview-2023.mov",
      iconUrl: "/images/projects/double-eleven/easystore-logo-icon.svg",
    },
    {
      title: "EasyStore Double Eleven Festival Page 2022",
      description: "Real-time sales monitoring page for Double Eleven Festival 2022.",
      imageUrl: "/images/projects/double-eleven/preview-2022.png",
      iconUrl: "/images/projects/double-eleven/easystore-logo-icon.svg",
    },
    {
      title: "Draw a Line | Easy line graph illustrating tool",
      description: "Get elegant and highly customized line graph in a glance.",
      url: "https://draw-a-line.vercel.app/",
      iconUrl: "https://draw-a-line.vercel.app/logo.svg",
    },
  ];

  return (
    <section id="projects" className="w-screen pt-24">
      <h3 className="text-3xl font-medium mb-5 px-6 md:px-10">Projects</h3>

      <div className="flex w-screen box-border overflow-x-scroll overflow-y-hidden px-6 md:px-10 py-36 -mt-36">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
