import Hero from "../components/hero";
import InfoBox from "../components/infoBox";
import SquezeBox from "../components/squezeBox";
import Card from "../components/card";
import { data, players } from "../utils/data";
import "./ListedCardPage.scss";

function ListedCardPage() {
  return (
    <main className="main">
      <Hero
        media={data.hero.image}
        title={data.hero.title}
        score={data.hero.score}
        listvalue={data.hero.listvalue}
      />
      <InfoBox
        title={data.partner.title}
        logo={data.partner.image}
        subtitle={data.partner.subtitle}
        subtitleText={data.partner.subtitleText}
        description={data.partner.description}
      />
      <InfoBox
        title={data.playerBio.title}
        subtitle={data.playerBio.subtitle}
        subtitleText={data.playerBio.subtitleText}
        description={data.playerBio.description}
      />
      <SquezeBox
        heading={data.playerStats.heading}
        description={data.playerStats.description}
      />
      <SquezeBox
        heading={data.playerSales.heading}
        description={data.playerSales.description}
      />
      <div className="cards">
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
      </div>
    </main>
  );
}

export default ListedCardPage;
