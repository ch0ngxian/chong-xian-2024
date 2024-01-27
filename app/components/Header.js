import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed top-0 w-full">
      <header className="flex px-11 py-5 rounded-lg backdrop-blur-md w-full bg-white bg-opacity-10">
        <Image src="/images/logo.svg" alt="Logo" width={60} height={24} priority />
      </header>
    </div>
  );
}
