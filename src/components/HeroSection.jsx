import Header from "./Header";
import hero_bg_mobile from "../assets/images/mobile/image-hero.jpg";
import hero_bg_desktop from "../assets/images/desktop/image-hero.jpg";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleBreakpointChange = (e) => {
      if (e.matches) {
        setMenuOpen(false);
      }
    };
    mediaQuery.addEventListener("change", handleBreakpointChange);
    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <section
      className={` px-5 py-10 ${menuOpen ? "bg-black" : "background"} lg:py-15 xl:py-20`}
      style={{
        "--mobile-bg": `url("${hero_bg_mobile}")`,
        "--desktop-bg": `url("${hero_bg_desktop}")`,
      }}
    >
      <div className="container">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <section>
          <h1
            className={`uppercase my-55 w-84.5 text-white border text-4xl/[2.25rem] p-5 font-[JosefinSans] tracking-[4px] ${menuOpen ? "opacity-0" : "opacity-100"} mx-auto lg:mx-0 lg:w-1/2 xl:w-2/5 lg:text-5xl 3xl:w-1/2 3xl:text-6xl lg:my-40 xl:my-45`}
          >
            Immersive experiences that deliver
          </h1>
        </section>
      </div>
    </section>
  );
}
