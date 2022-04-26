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
      <h1>GIF SEARCH</h1>
      <div className="search-info">
        <input
          type="text"
          name=""
          id=""
          onChange={handleChange}
          onKeyDown={(e) => handleEnter(e)}
          value={item}
          placeholder="Procure por algum GIF"
        />
        <div className="botoes">
          <button className="botaoUm" onClick={getGif}>
            PROCURAR
          </button>
          <button className="botaoDois" onClick={getTrending}>
            POPULARES
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
