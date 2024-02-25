import Image from "next/image";
import MailIcon from "../components/icon/MailIcon";

export default async function Contacts() {
  return (
    <section className="mx-10 min-h-screen flex flex-col justify-end">
      <div className="mb-10">
        <span className="text-8xl">👋</span>
        <div className="mt-5">
          <span className="text-6xl font-medium">Get in touch</span>
          <p className="text-5xl mt-2 text-gray-400">Feel free to contact me</p>
        </div>
        <div className="flex justify-between mt-10">
          <div className="cursor-pointer flex items-center gap-3 hover:text-gray-500">
            <MailIcon className="h-10 w-10" />
            <span className="text-3xl">chongxian.goh@gmail.com</span>
          </div>
          <div className="flex gap-5">
            {[
              {
                name: "linkedin",
                url: "https://www.linkedin.com/in/chongxian/",
              },
              {
                name: "facebook",
                url: "https://www.facebook.com/chongxian.goh",
              },
              {
                name: "github",
                url: "https://github.com/ch0ngxian",
              },
              {
                name: "medium",
                url: "https://medium.com/@ch0ngx1an",
              },
            ].map((platform) => {
              return (
                <a key={platform.name} href={platform.url} target="_blank">
                  <Image className="h-12 w-12 hover:text-gray-500" width={512} height={512} src={`/images/${platform.name}.svg`} alt="" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
