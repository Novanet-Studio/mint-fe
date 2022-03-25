import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./searchBox.scss";

const SearchBox = (props) => {
  return (
    <div className="searchbox">
      <form className="form searchbox_form" name={props.name}>
        <button type="submit">
          <FontAwesomeIcon
            className="searchbox__icon"
            icon={["fas", "magnifying-glass"]}
            size="lg"
          />
        </button>
        <input
          className="searchbox__input"
          type="text"
          placeholder={props.placeholder}
        />
      </form>
    </div>
  );
};

export default SearchBox;
