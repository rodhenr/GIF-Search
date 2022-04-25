import "../styles/search.scss";

function Search({handleChange, item, getGif, getTrending, trending}) {
  return (
    <div className="containerSearch">
      <h1>GIF SEARCH</h1>
      <div className="search-info">
        <input
          type="text"
          name=""
          id=""
          onChange={handleChange}
          value={item}
          placeholder="Procure por algum GIF"
        />
        <button onClick={getGif}>PROCURAR</button>
        <button onClick={getTrending}>Populares</button>
      </div>
    </div>
  );
}

export default Search;
