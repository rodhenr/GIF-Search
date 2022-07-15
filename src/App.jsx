import { useState } from "react";
import axios from "axios";

import Gifs from "./components/Gifs";
import Search from "./components/Search";

import "./styles/App.scss";

function App() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState({ atual: "", anterior: "" });
  const [loading, setLoading] = useState(false);
  const { REACT_APP_BASE_URL } = process.env;
  const baseUrl = REACT_APP_BASE_URL || "http://localhost:8080/";

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
        const resp = await axios.get(`${baseUrl}search`, {
          params: {
            item: item.atual,
            limit: 20,
          },
        });
        setData([...resp.data.data]);
      } else {
        setItem({ ...item, anterior: "Popular" });
        const resp = await axios.get(
          `${baseUrl}trending`
        );
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
