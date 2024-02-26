import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";

export default async function AboutMe() {
  const imageDirectory = path.join(process.cwd(), "/public/images/me");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <section className="mx-6 md:mx-10 min-h-screen flex flex-col">
      <div className="flex flex-col justify-between grow mt-44 lg:mt-52 mb-10">
        <div className="inline-flex flex-col gap-2">
          <h1 className="text-5xl md:text-6xl font-medium">
            Hi, I am <br className="inline md:hidden" /> Chong Xian
          </h1>
          <span className="mt-3 mb-10 md:mt-auto text-3xl md:text-5xl font-light">I design and develop nice product.</span>{" "}
        </div>
        <div className="flex justify-between items-end">
          <div className="text-xl md:text-2xl">
            Multi-hypernate <br /> Software Engineers
          </div>
          <div className="text-right">
            <Image
              className="mb-2"
              key={imageFilenames[0]}
              width={512}
              height={512}
              style={{ width: "100%", height: "auto" }}
              src={`/images/me/${imageFilenames[0]}`}
              alt=""
            />
            <span className="text-lg">Random photo of me</span>
          </div>
        </div>
      </div>
    </section>
  );
}
