import "../styles/search.scss";

function Search({ handleChange, item, getGif }) {
  function handleEnter(e) {
    if (e.key === "Enter") {
      getGif("Procurar");
    } else {
      return;
    }
  }

  function handleSearch(type) {
    getGif(type);
  }

  return (
    <div className="containerSearch">
      <h1 data-cy="home">
        <a href="/GIF-Search/">GIF SEARCH</a>
      </h1>
      <div className="search-info">
        <input
          type="text"
          name="search"
          onChange={handleChange}
          onKeyDown={(e) => handleEnter(e)}
          value={item.atual}
          placeholder="Procure por algum GIF"
          data-cy="input"
        />
        <div className="buttonsContainer">
          <button
            className="searchButton"
            onClick={() => handleSearch("Procurar")}
            data-cy="btn-search"
          >
            PROCURAR
          </button>
          <button
            className="popularButton"
            onClick={() => handleSearch("Popular")}
            data-cy="btn-popular"
          >
            POPULARES
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
