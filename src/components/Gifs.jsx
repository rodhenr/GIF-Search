import "../styles/Gifs.scss";

function Gifs({ data, trending }) {
  return (
    <div>
      {data.length === 0 && trending.length === 0 ? (
        <div className="containerSemGifs">
          <p>Nenhum item encontrado!</p>
        </div>
      ) : data.length > 0 ? (
        <div className="containerComGifs">
          {data.map((i) => (
            <div className="gifItem">
              <a href={i.bitly_gif_url} target="_blank" rel="noreferrer">
                <img src={i.images.downsized.url} alt="gif" />
              </a>
            </div>
          ))}
        </div>
      ) : trending.length > 0 ? (
        <div className="containerComGifs">
          {trending.map((i) => (
            <div className="gifItem">
              <a href={i.bitly_gif_url} target="_blank" rel="noreferrer">
                <img src={i.images.downsized.url} alt="gif" />
              </a>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Gifs;
