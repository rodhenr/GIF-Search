import { useState } from "react";
import axios from "axios";

import Gifs from "./components/Gifs";
import Search from "./components/Search";
import key from "./components/Key";

import "./styles/App.scss";

function App() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState("");

  const limit = 20;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${item}&limit=${limit}`;

  function handleChange(e) {
    const text = e.target.value;
    setItem(text);
  }

  function getGif() {
    axios.get(url).then((response) => {
      const newData = response.data.data;
      console.log(newData);
      setData([...newData]);
    });
  }

  return (
    <div className="containerApp">
      <Search handleChange={handleChange} getGif={getGif} item={item} />
      <Gifs data={data} />
    </div>
  );
}

export default App;
