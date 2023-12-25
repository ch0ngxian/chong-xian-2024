import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";

export default async function ThingsILove() {
  const imageDirectory = path.join(process.cwd(), "/public/images/things-i-love");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <section className="columns-2 gap-5 md:columns-3 md:gap-8 [&>img:not(:first-child)]:mt-8 mx-10">
      {imageFilenames.map((filename) => {
        return (
          <Image key={filename} width={512} height={512} style={{ width: "100%", height: "auto" }} src={`/images/things-i-love/${filename}`} alt="" />
        );
      })}
    </section>
  );
}
