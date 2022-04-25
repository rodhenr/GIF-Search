import "../styles/search.scss";

function Search({ handleChange, item, getGif, getTrending, trending }) {
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
        <div className="botoes">
          <button className="botaoUm" onClick={getGif}>PROCURAR</button>
          <button className="botaoDois" onClick={getTrending}>POPULARES</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
