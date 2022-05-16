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
  const [anterior, setAnterior] = useState("");

  const limit = 25;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${item}&limit=${limit}`;
  const urlTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${limit}`;

  function handleChange(e) {
    const text = e.target.value;
    setItem(text);
  }

  function getGif() {
    if (item === "" || item === anterior) {
      return;
    } else {
      setLoading(true);
      axios.get(url).then((response) => {
        const newData = response.data.data;
        setData([...newData]);
      });
      setData([]);
      setTrending([]);
      setAnterior(item);
    }
    setTimeout(() => setLoading(false), 1500);
  }

  function getTrending() {
    setLoading(true);
    setData([]);
    axios.get(urlTrending).then((response) => {
      const newData = response.data.data;
      setTrending([...newData]);
    });
    setTimeout(() => setLoading(false), 1500);
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
        <div className="containerLoader">
          <div className="loader"></div>
          <p>Carregando</p>
        </div>
      ) : null}
      <div className={loading ? "hidden" : null}>
        <Gifs data={data} trending={trending} anterior={anterior} />
      </div>
    </div>
  );
}

export default App;
