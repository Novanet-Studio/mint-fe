import Hero from "../components/hero";
import InfoBox from "../components/infoBox";
import Card from "../components/card";
import { view2, players } from "../utils/data";
import "./MintCustomCardPage.scss";
// @fortawesome libraries

function MintCustomCardPage() {
  return (
    <main className="main">
      <Hero
        media={view2.hero.image}
        title={view2.hero.title}
        score={view2.hero.score}
        listvalue={view2.hero.listvalue}
        buttonA={view2.hero.buttonA}
        buttonB={view2.hero.buttonB}
      />
      <InfoBox
        title={view2.instructions.title}
        logo={view2.instructions.image}
        subtitle={view2.instructions.subtitle}
        subtitleText={view2.instructions.subtitleText}
        description={view2.instructions.description}
      />
      <form className="form" name="contact">
        <div className="form__column-a">
          <h3>Custom Content</h3>
          <input
            type="text"
            name="name__nickname"
            placeholder="Name (and Nickname)*"
          />
          <input type="text" name="position" placeholder="Position" />
          <input type="text" name="hometown" placeholder="Hometown" />
          <input type="text" name="college" placeholder="College" />
          <input type="text" name="pro" placeholder="Pro" />
        </div>
        <div className="form__column-b">
          <h3>Contact Details (confidential)</h3>
          <input type="email" name="email" placeholder="Email" />
          <input type="number" name="phone" placeholder="Phone" />
          <textarea name="message" rows="5" placeholder="Message" />
          <input type="file" name="files" className="form__file" />
        </div>
        <input
          className="button button__action--fill"
          type="submit"
          value="Mint Custom Card"
        />
      </form>
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
          <button className="button button__action--fill form__button">
            View All
          </button>
        </div>
      </div>
    </main>
  );
}

export default MintCustomCardPage;
