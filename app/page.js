import Header from "./components/Header";
import ThingsILove from "./sections/ThingsILove";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import Blogs from "./sections/Blogs";
import Contacts from "./sections/Contacts";
import Processes from "./sections/Processes";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Landing />
        <Processes />
        <Projects />
        <Blogs />
        <ThingsILove />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
