import Hero from "../components/hero";
import "./ListedCardPage.scss";
import Media from "../assets/images/dpc-media-highlight.webp";

function ListedCardPage() {
  return (
    <main className="main">
      <Hero
        media={Media}
        title="Player name"
        score="Rarity score"
        listvalue="X.XXX SOL"
      />
    </main>
  );
}

export default ListedCardPage;
