import axios from "axios";
import { useState } from "react";
import key from "./Key";
import Gifs from "./Gifs";
import "../styles/search.scss";

function Search() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchItem}&limit=${limit}`;

  function handleChange(e) {
    const text = e.target.value;
    setSearchItem(text);
  }

  function getGif() {
    axios.get(url).then((response) => {
      const newData = response.data.data;
      console.log(newData);
      setData([...newData]);
    });
  }

  return (
    <div>
      <div className="search">
        <h1>PROCURE POR UM GIF</h1>
        <div className="search-info">
          <input
            type="text"
            name=""
            id=""
            onChange={handleChange}
            value={searchItem}
          />
          <button onClick={getGif}>PROCURAR</button>
        </div>
      </div>

      <div className="container">
        <Gifs data={data} />
      </div>
    </div>
  );
}

export default Search;
