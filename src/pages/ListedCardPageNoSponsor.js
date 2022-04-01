import Hero from "../components/hero";
import PlayerCarousel from "../components/playerCarousel";
import InfoBox from "../components/infoBox";
import SquezeBox from "../components/squezeBox";
import { view1, playerHighligths } from "../utils/data";
import "./ListedCardPage.scss";

function ListedCardPage() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <main className="main">
      <Hero
        media={view1.hero.image}
        title={view1.hero.title}
        score={view1.hero.score}
        listvalue={view1.hero.listvalue}
        buttonA={view1.hero.buttonA}
        buttonB={view1.hero.buttonB}
      />
      <PlayerCarousel items={playerHighligths} config={settings} />
      <InfoBox
        title={view1.playerBio.title}
        subtitle={view1.playerBio.subtitle}
        subtitleText={view1.playerBio.subtitleText}
        description={view1.playerBio.description}
      />
      <SquezeBox
        heading={view1.playerStats.heading}
        description={view1.playerStats.description}
      />
      <SquezeBox
        heading={view1.playerSales.heading}
        description={view1.playerSales.description}
      />
    </main>
  );
}

export default ListedCardPage;
