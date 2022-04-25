import { useState } from "react";
import axios from "axios";

import Gifs from "./components/Gifs";
import Search from "./components/Search";
import key from "./components/Key";

import "./styles/App.scss";

function App() {
  const [data, setData] = useState([]);
  const [trending, setTrending] = useState([]);
  const [item, setItem] = useState("");
  const [loading, setLoading] = useState(false);

  const limit = 25;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${item}&limit=${limit}`;
  const urlTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${limit}`;

  function handleChange(e) {
    const text = e.target.value;
    setItem(text);
  }

  function getGif() {
    setLoading(true);
    if (item === "") {
      return;
    } else {
      axios.get(url).then((response) => {
        const newData = response.data.data;
        setData([...newData]);
      });
      setData([]);
      setTrending([]);
    }
    setTimeout(() => setLoading(false), 3000);
  }

  function getTrending() {
    setData([]);
    axios.get(urlTrending).then((response) => {
      const newData = response.data.data;
      setTrending([...newData]);
    });
  }

  return (
    <div className="containerApp">
      <Search
        handleChange={handleChange}
        getGif={getGif}
        item={item}
        getTrending={getTrending}
      />
      {loading ? (
        <div class="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : null}
      <div className={loading ? "hidden" : null}>
        <Gifs data={data} trending={trending} />
      </div>
    </div>
  );
}

export default App;
