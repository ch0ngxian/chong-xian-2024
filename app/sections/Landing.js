import { promises as fs } from "fs";
import path from "path";
import PersonalPhoto from "../components/PersonalPhoto";
import AnimatedGradientText from "../components/AnimatedGradientText";
import CurvedText from "../components/curved-text/CurvedText";
import "./css/Landing.css";
import ScrollBasedVelocity from "../components/ScrollBasedVelocity";

export default async function Landing() {
  const imageDirectory = path.join(process.cwd(), "/public/images/me");
  const imageFilenames = (await fs.readdir(imageDirectory)).filter((filename) => filename.endsWith(".png"));

  return (
    <section className="mx-6 md:mx-10 min-h-screen flex flex-col">
      <div className="flex flex-col justify-between grow mt-28 lg:mt-52 mb-12">
        <div className="inline-flex flex-col gap-2">
          <h1 className="text-4xl md:text-6xl font-bold text-[#333333] tracking-tight">
            Hi, I am <br className="inline md:hidden" /> Chong Xian
          </h1>
          <span className="mt-3 mb-10 md:mt-auto text-2xl md:text-5xl">I design and develop nice product.</span>{" "}
        </div>

        {/* Desktop */}
        <div className="hidden sm:flex justify-between items-end">
          <div className="label-badge relative">
            <AnimatedGradientText className={"from-[#333333] via-gray-200 to-[#333333]"}>
              <div className="md:text-2xl">
                Multi-hyphenate <br /> Software Engineer
              </div>
            </AnimatedGradientText>

            <CurvedText className={"label-badge-rotate"} text="• Scrum • UI • UX • Vue.js • Ruby on Rails • Laravel • MySQL •  AWS"></CurvedText>
          </div>

          <PersonalPhoto imageFilenames={imageFilenames} />
        </div>

        {/* Mobile */}
        <div className="sm:hidden h-1/4">
          <div className="flex justify-end">
            <PersonalPhoto imageFilenames={imageFilenames} />
          </div>

          <div className="invisible">
            <div className="flex justify-center label-badge relative w-full">
              <AnimatedGradientText className={"from-[#333333] via-gray-200 to-[#333333]"}>
                <div className="md:text-2xl">
                  Multi-hyphenate <br /> Software Engineer
                </div>
              </AnimatedGradientText>

              <div className="label-badge-view label-badge-rotate">
                <CurvedText className={""} text="• Scrum • UI • UX • Vue.js • Ruby on Rails • Laravel • MySQL •  AWS"></CurvedText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
