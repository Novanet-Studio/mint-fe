import Card from "../components/card";
import SearchBox from "../components/searchBox";
import FilterBox from "../components/filters";
import Carousel from "../components/carousel";
import { view3, playerQuery, playerSlider } from "../utils/data";
import "./MarketplaceViewAllPage.scss";

function MarketplaceViewAllPage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <main className="main">
      <div className="search">
        <h1 className="search__title">Explore the Marketplace</h1>
        <FilterBox filters={view3.filters} />
        <SearchBox
          placeholder="Search by player, team, or sport"
          name="search"
        />
        <div className="search__tabs">
          <button className="button button__action--white-fill search__buttons">
            For Sale
          </button>
          <button className="button button__action--outline search__buttons">
            Latest Sales
          </button>
          <button className="button button__action--outline search__buttons">
            Top Sales
          </button>
        </div>

        <Carousel clase={"search__carousel"} items={playerSlider} config={settings} />

        <div className="cards search__cards">
          <h2 className="cards__title">Featured Player Cards</h2>
          {playerQuery.map(function (player) {
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
          <div className="cards__button-container"></div>
        </div>
      </div>
    </main>
  );
}

export default MarketplaceViewAllPage;
