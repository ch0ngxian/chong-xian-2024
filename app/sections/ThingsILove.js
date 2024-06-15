import { promises as fs } from "fs";
import path from "path";
import ThingCard from "../components/ThingCard";

export default async function ThingsILove() {
  const imageDirectory = path.join(process.cwd(), "/public/images/things-i-love");
  const imageFilenames = await fs.readdir(imageDirectory);

  const things = [
    {
      title: "Aston Martin Vantage",
      description: "Dream car",
      image_url: "/images/things-i-love/aston-martin.png",
    },
    {
      title: "Accusefive",
      description: "Music",
      image_url: "/images/things-i-love/accusefive.png",
    },
    {
      title: "❤️👩🏻",
      description: "3000 days celebration dinner",
      image_url: "/images/things-i-love/baby1.jpeg",
    },
    {
      title: "❤️👩🏻",
      description: "Walking on Bagan Lalang beach",
      image_url: "/images/things-i-love/baby2.jpeg",
    },
    {
      title: "Coldplay",
      description: "Music",
      image_url: "/images/things-i-love/coldplay.png",
    },
    {
      title: "Go kart",
      description: "Sport that I love to play with friends",
      image_url: "/images/things-i-love/go-kart.png",
    },
    {
      title: "Interstellar",
      description: "Favorite movie",
      image_url: "/images/things-i-love/interstellar.png",
    },
    {
      title: "Lany",
      description: "Best roadtrip music band",
      image_url: "/images/things-i-love/lany.png",
    },
    {
      title: "🧑🏻❤️👩🏻",
      description: "Trip to Langkawi Island, Malaysia",
      image_url: "/images/things-i-love/us.png",
    },
    {
      title: "Rick and Morty",
      description: "TV series",
      image_url: "/images/things-i-love/rick-and-morty.png",
    },
    {
      title: "Taylor Swift",
      description: "Music",
      image_url: "/images/things-i-love/taylor-swift.png",
    },
    {
      title: "Tesla",
      description: "Loving the tech and the revolution it brings to the world",
      image_url: "/images/things-i-love/tesla.png",
    },
  ];

  return (
    <section id="things-i-love" className="mx-6 md:mx-10">
      <h3 className="text-3xl font-medium mb-5">Things I love</h3>
      <div className="columns-2 gap-5 md:columns-3 md:gap-8 lg:columns-4 [&>div:not(:first-child)]:mt-8">
        {things.map((thing, index) => {
          return <ThingCard key={index} title={thing.title} description={thing.description} image_url={thing.image_url} />;
        })}
      </div>
    </section>
  );
}
