import "../styles/search.scss";

function Search({ handleChange, item, getGif, getTrending }) {
  function handleEnter(e) {
    if (e.key === "Enter") {
      getGif();
    } else {
      return;
    }
  }

  return (
    <div className="containerSearch">
      <h1>
        <a href="/">GIF SEARCH</a>
      </h1>
      <div className="search-info">
        <input
          type="text"
          name="search"
          onChange={handleChange}
          onKeyDown={(e) => handleEnter(e)}
          value={item}
          placeholder="Procure por algum GIF"
        />
        <div className="buttonsContainer">
          <button className="searchButton" onClick={getGif}>
            PROCURAR
          </button>
          <button className="popularButton" onClick={getTrending}>
            POPULARES
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
