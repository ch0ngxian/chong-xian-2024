import { promises as fs } from "fs";
import path from "path";
import ThingCard from "../components/ThingCard";

export default async function ThingsILove() {
  const imageDirectory = path.join(process.cwd(), "/public/images/things-i-love");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <section className="mx-10">
      <h3 className="text-3xl font-medium mb-5">Things I love</h3>
      <div className="columns-2 gap-5 md:columns-3 md:gap-8 [&>div:not(:first-child)]:mt-8">
        {imageFilenames.map((filename) => {
          return <ThingCard key={filename} filename={filename} />;
        })}
      </div>
    </section>
  );
}
