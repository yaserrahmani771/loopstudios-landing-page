import { HeroSection } from "./components/HeroSection";
import vr_desktop from "./assets/images/desktop/image-interactive.jpg";
import vr_mobile from "./assets/images/mobile/image-interactive.jpg";
import deep_earth_mobile from "./assets/images/mobile/image-deep-earth.jpg";
import deep_earth_desktop from "./assets/images/desktop/image-deep-earth.jpg";
import night_arcade_mobile from "./assets/images/mobile/image-night-arcade.jpg";
import night_arcade_desktop from "./assets/images/desktop/image-night-arcade.jpg";
import soccer_team_mobile from "./assets/images/mobile/image-soccer-team.jpg";
import soccer_team_desktop from "./assets/images/desktop/image-soccer-team.jpg";
import grid_mobile from "./assets/images/mobile/image-grid.jpg";
import grid_desktop from "./assets/images/desktop/image-grid.jpg";
import from_up_mobile from "./assets/images/mobile/image-from-above.jpg";
import from_up_desktop from "./assets/images/desktop/image-from-above.jpg";
import pocket_borealis_mobile from "./assets/images/mobile/image-pocket-borealis.jpg";
import pocket_borealis_desktop from "./assets/images/desktop/image-pocket-borealis.jpg";
import curiosity_mobile from "./assets/images/mobile/image-curiosity.jpg";
import curiosity_desktop from "./assets/images/desktop/image-curiosity.jpg";
import make_fisheye_mobile from "./assets/images/mobile/image-fisheye.jpg";
import make_fisheye_desktop from "./assets/images/desktop/image-fisheye.jpg";
import CreationCard from "./components/CreationCard";
import { Footer } from "./components/Footer";

export default function Home() {
  const creationCards = [
    {
      title: "Deep Earth",
      mobileBG: deep_earth_mobile,
      desktopBG: deep_earth_desktop,
    },
    {
      title: "Night Arcade",
      mobileBG: night_arcade_mobile,
      desktopBG: night_arcade_desktop,
    },
    {
      title: "Soccer Team VR",
      mobileBG: soccer_team_mobile,
      desktopBG: soccer_team_desktop,
    },
    {
      title: "The Grid",
      mobileBG: grid_mobile,
      desktopBG: grid_desktop,
    },
    {
      title: "From up above vr",
      mobileBG: from_up_mobile,
      desktopBG: from_up_desktop,
    },
    {
      title: "Pocket Borealis",
      mobileBG: pocket_borealis_mobile,
      desktopBG: pocket_borealis_desktop,
    },
    {
      title: "The Curiosity",
      mobileBG: curiosity_mobile,
      desktopBG: curiosity_desktop,
    },
    {
      title: "Make it fisheye",
      mobileBG: make_fisheye_mobile,
      desktopBG: make_fisheye_desktop,
    },
  ];
  return (
    <>
      <HeroSection />
      <article className="vr-section px-5 py-12 text-center 3xl:py-25">
        <div className="container flex flex-col gap-5 lg:flex-row lg:gap-10 3xl:relative">
          <div className="image-container lg:w-1/2 3xl:w-3/4 mx-auto lg:mx-0">
            <picture>
              <source srcSet={vr_desktop} media="(min-width: 1440px)" />
              <img src={vr_mobile} alt="" />
            </picture>
          </div>
          <div className="content bg-white flex flex-col gap-4 lg:w-1/2 lg:pt-15 xl:pt-20 3xl:w-3/5 3xl:absolute 3xl:right-0 3xl:top-40 3xl:p-20 3xl:gap-10">
            <h2 className="text-4xl uppercase lg:text-5xl">
              The leader in interactive vr
            </h2>
            <p className="text-lg lg:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </article>
      <section className="p-5  font-[JosefinSans] uppercase">
        <div className="container mx-auto grid grid-cols-1 gap-5 xl:grid-cols-2 xl:">
          <h2 className="text-center text-4xl font-[JosefinSans] uppercase lg:col-start-1 lg:row-start-1 lg:self-center lg:text-left">
            Our Creations
          </h2>
          <div className="cards-container lg:grid lg:grid-cols-4 gap-5 lg:row-start-2 lg:row-end-3 lg:col-span-2">
            {creationCards.map((creationCard) => {
              return (
                <CreationCard
                  key={creationCard.title}
                  creationCard={creationCard}
                />
              );
            })}
          </div>
          <button className="border px-7 py-1.5 tracking-widest justify-self-center lg:justify-self-end lg:row-start-1 lg:col-start-2 cursor-pointer hover:text-white hover:border-white hover:bg-black">
            See All
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
