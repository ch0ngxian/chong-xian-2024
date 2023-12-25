import Image from "next/image";

export default function Header() {
  return (
    <div className="px-5 fixed top-5 w-full">
      <header className="flex px-6 py-3 rounded-lg backdrop-blur-md w-full bg-white bg-opacity-30">
        <Image src="/images/logo.svg" alt="Logo" width={60} height={24} priority />
      </header>
    </div>
  );
}
