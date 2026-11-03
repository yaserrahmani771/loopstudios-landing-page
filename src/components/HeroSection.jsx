import Header from "./Header";
import hero_bg_mobile from "../assets/images/mobile/image-hero.jpg";
import hero_bg_desktop from "../assets/images/desktop/image-hero.jpg";

export function HeroSection() {
  return (
    <section
      className="background px-5 py-10 "
      style={{
        "--mobile-bg": `url("${hero_bg_mobile}")`,
        "--desktop-bg": `url("${hero_bg_desktop}")`,
      }}
    >
      <Header />
      <section>
        <h1 className="uppercase my-50 text-white border text-4xl/[2.25rem] p-5 font-[JosefinSans] tracking-[4px]">
          {`Immersive experiences that deliver`.slice(" ")}
        </h1>
      </section>
    </section>
  );
}
