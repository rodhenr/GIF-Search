import { useState } from "react";
import axios from "axios";

import Gifs from "./components/Gifs";
import Search from "./components/Search";
import key from "./components/Key";

import "./styles/App.scss";

function App() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState({ atual: "", anterior: "" });
  const [loading, setLoading] = useState(false);

  const limit = 20;
  const urlProcura = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${item.atual}&limit=${limit}`;
  const urlPopular = `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${limit}`;

  function handleChange(e) {
    setItem({ ...item, atual: e.target.value });
  }

  async function getGif(type) {
    if (
      (type === "Procurar" &&
        item.atual !== "" &&
        item.atual !== item.anterior) ||
      (type === "Popular" && item.anterior !== "Popular")
    ) {
      setLoading(true);
      if (type === "Procurar") {
        setItem({ ...item, anterior: item.atual });
        const resp = await axios.get(urlProcura);
        setData([...resp.data.data]);
      } else {
        setItem({ ...item, anterior: "Popular" });
        const resp = await axios.get(urlPopular);
        setData([...resp.data.data]);
      }
      setLoading(false);
    } else {
      return;
    }
  }

  return (
    <div className="containerApp">
      <Search handleChange={handleChange} getGif={getGif} item={item} />
      {loading && (
        <div className="containerLoader">
          <div className="loader"></div>
          <p>Carregando</p>
        </div>
      )}
      <div className={loading ? "hidden" : null}>
        <Gifs data={data} item={item} />
      </div>
    </div>
  );
}

export default App;
