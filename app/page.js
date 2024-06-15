import Header from "./components/Header";
import ThingsILove from "./sections/ThingsILove";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Blogs from "./sections/Blogs";
import Contacts from "./sections/Contacts";
import Processes from "./sections/Processes";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <AboutMe />
        <Processes />
        <Projects />
        <Blogs />
        <ThingsILove />
        <Contacts />
      </main>
    </div>
  );
}
