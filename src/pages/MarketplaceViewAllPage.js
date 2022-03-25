import Card from "../components/card";
import SearchBox from "../components/searchBox";
import FilterBox from "../components/filters";
import { view3, players } from "../utils/data";
import "./MarketplaceViewAllPage.scss";

function MarketplaceViewAllPage() {
  return (
    <main className="main">
      <h1 className="cards__title">Explore the Marketplace</h1>
      <div className="search">
        <FilterBox filters={view3.filters} />
        <SearchBox
          placeholder="Search by player, team, or sport"
          name="search"
        />
      </div>

      <div className="cards">
        <h2 className="cards__title">Featured Player Cards</h2>
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

export default MarketplaceViewAllPage;
