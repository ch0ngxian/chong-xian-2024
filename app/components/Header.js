"use client";

import Image from "next/image";

export default function Header() {
  const navigations = [
    { id: "about-me", title: "About me" },
    { id: "projects", title: "Projects" },
    { id: "things-i-love", title: "Things I love" },
    { id: "contact", title: "Contact" },
  ];
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <header className="flex justify-between px-7 md:px-11 py-5 rounded-lg backdrop-blur-md w-full bg-white bg-opacity-10">
        <Image className="cursor-pointer" onClick={() => scrollToTop()} src="/images/logo.svg" alt="Logo" width={60} height={24} priority />
        <div className="flex gap-5">
          {navigations.map((navigation) => (
            <div key={navigation.id} className="cursor-pointer hover:opacity-50 px-3" onClick={() => scrollToSection(navigation.id)}>
              {navigation.title}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}
