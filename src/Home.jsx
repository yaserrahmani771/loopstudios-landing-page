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
      <article className="vr-section">
        <div className="image-container">
          <picture>
            <source srcSet={vr_desktop} media="(min-width: 1440px)" />
            <img src={vr_mobile} alt="" />
          </picture>
        </div>
        <div className="contents">
          <h2>The leader in interactive vr</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </article>
      <section>
        <h2>Our Creations</h2>
        {creationCards.map((creationCard) => {
          return (
            <CreationCard
              key={creationCard.title}
              creationCard={creationCard}
            />
          );
        })}
        <button>See All</button>
      </section>
      <Footer />
    </>
  );
}
