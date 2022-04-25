import "../styles/search.scss";

function Search({handleChange, item, getGif}) {
  return (
    <div className="containerSearch">
      <h1>PROCURE POR UM GIF</h1>
      <div className="search-info">
        <input
          type="text"
          name=""
          id=""
          onChange={handleChange}
          value={item}
        />
        <button onClick={getGif}>PROCURAR</button>
      </div>
    </div>
  );
}

export default Search;
