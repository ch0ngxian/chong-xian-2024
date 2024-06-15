import Image from "next/image";
import MailIcon from "../components/icon/MailIcon";
import LinkedinIcon from "../components/icon/LinkedinIcon";
import FacebookIcon from "../components/icon/FacebookIcon";
import GithubIcon from "../components/icon/GithubIcon";
import MediumIcon from "../components/icon/MediumIcon";

export default async function Contacts() {
  return (
    <section id="contact" className="mx-6 md:mx-10 h-[75vh] md:min-h-screen flex flex-col justify-end">
      <div className="mb-10">
        <span className="text-5xl md:text-8xl">👋</span>
        <div className="mt-5">
          <span className="text-3xl md:text-6xl font-medium">Get in touch</span>
          <p className="text-2xl md:text-5xl mt-2 text-gray-400">Feel free to contact me</p>
        </div>
        <div className="flex justify-between mt-10 flex-col md:flex-row">
          <div className="cursor-pointer flex items-center gap-3 hover:text-gray-500">
            <MailIcon className="h-7 w-7 md:h-10 md:w-10" />
            <span className="text-xl md:text-3xl">chongxian.goh@gmail.com</span>
          </div>
          <div className="flex flex-wrap gap-5 mt-10">
            <a href="https://www.linkedin.com/in/chongxian/" target="_blank">
              <LinkedinIcon className="h-10 w-10 md:h-12 md:w-12 hover:text-gray-500" />
            </a>
            <a href="https://www.facebook.com/chongxian.goh" target="_blank">
              <FacebookIcon className="h-10 w-10 md:h-12 md:w-12 hover:text-gray-500" />
            </a>
            <a href="https://github.com/ch0ngxian" target="_blank">
              <GithubIcon className="h-10 w-10 md:h-12 md:w-12 hover:text-gray-500" />
            </a>
            <a href="https://medium.com/@ch0ngx1an" target="_blank">
              <MediumIcon className="h-10 w-10 md:h-12 md:w-12 hover:text-gray-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
