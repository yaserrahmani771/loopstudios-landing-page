import Header from "./Header";
import hero_bg_mobile from "../assets/images/mobile/image-hero.jpg";
import hero_bg_desktop from "../assets/images/desktop/image-hero.jpg";
import { useState } from "react";

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section
      className={` px-5 py-10 ${menuOpen ? "bg-black" : "background"} 3xl:py-20`}
      style={{
        "--mobile-bg": `url("${hero_bg_mobile}")`,
        "--desktop-bg": `url("${hero_bg_desktop}")`,
      }}
    >
      <div className="container">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <section>
          <h1
            className={`uppercase my-55 text-white border text-4xl/[2.25rem] p-5 font-[JosefinSans] tracking-[4px] ${menuOpen ? "opacity-0" : "opacity-100"} 3xl:w-3/6 3xl:text-6xl 3xl:my-45`}
          >
            Immersive experiences that deliver
          </h1>
        </section>
      </div>
    </section>
  );
}
