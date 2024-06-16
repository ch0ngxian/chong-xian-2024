import { promises as fs } from "fs";
import path from "path";
import PersonalPhoto from "../components/PersonalPhoto";

export default async function Landing() {
  const imageDirectory = path.join(process.cwd(), "/public/images/me");
  const imageFilenames = (await fs.readdir(imageDirectory)).filter((filename) => filename.endsWith(".png"));

  return (
    <section className="mx-6 md:mx-10 min-h-screen flex flex-col">
      <div className="flex flex-col justify-between grow mt-28 lg:mt-52 mb-32">
        <div className="inline-flex flex-col gap-2">
          <h1 className="text-4xl md:text-6xl font-bold text-[#333333] tracking-tight">
            Hi, I am <br className="inline md:hidden" /> Chong Xian
          </h1>
          <span className="mt-3 mb-10 md:mt-auto text-2xl md:text-5xl font-light">I design and develop nice product.</span>{" "}
        </div>
        <div className="flex justify-between items-end">
          <div className="text-lg md:text-2xl">
            Multi-hypernate <br /> Software Engineers
          </div>
          <PersonalPhoto imageFilenames={imageFilenames} />
        </div>
      </div>
    </section>
  );
}
