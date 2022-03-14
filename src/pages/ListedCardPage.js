import Hero from "../components/hero";
import InfoBox from "../components/infoBox";
import SquezeBox from "../components/squezeBox";
import Card from "../components/card";
import { view1, players } from "../utils/data";
import "./ListedCardPage.scss";

function ListedCardPage() {
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
      <InfoBox
        title={view1.partner.title}
        logo={view1.partner.image}
        subtitle={view1.partner.subtitle}
        subtitleText={view1.partner.subtitleText}
        description={view1.partner.description}
      />
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
      <div className="cards">
        <h2 className="cards__title">Explore More Cards</h2>
        {players.map(function (player) {
          return (
            <Card
              key={player.id}
              image={player.image}
              name={player.name}
              league={player.league}
              level={player.level}
              tier={player.tier}
              value={player.value}
              average={player.average}
            />
          );
        })}
        <div className="cards__button-container">
        <button className="button button__action--fill cards__button">
          View All
        </button>
        </div>
      </div>
    </main>
  );
}

export default ListedCardPage;
