import Image from "next/image";

export default async function Processes() {
  return (
    <section className="mx-10 my-10 flex justify-between items-center h-screen">
      <div className="flex flex-col justify-center">
        <h1 className="text-xl">In my daily work, I do</h1>
        <div className="my-5">
          <div className="text-6xl font-bold my-6 text-[#9747FF]">Design</div>
          <div className="text-6xl font-bold my-6">Develop</div>
          <div className="text-6xl font-bold my-6">Empower</div>
        </div>
        <div class="text-xl mt-10">Passionate on drawing clean UI design and provide easy to use experience</div>
        <div className="mt-5">
          <div className="px-5 py-1 rounded-full bg-gray-200 w-fit">Figma</div>
        </div>
      </div>
      <div className="bg-[#FCFAFF] p-10 ml-10 rounded-lg border border-[#F5ECFF] w-6/11 h-fit">
        <Image className="mb-2" width={1024} height={1024} style={{ width: "100%", height: "auto" }} src={`/images/processes/design.png`} alt="" />
      </div>
    </section>
  );
}
