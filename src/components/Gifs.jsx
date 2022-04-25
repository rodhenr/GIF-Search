import "../styles/Gifs.scss";

function Gifs({ data, trending, anterior }) {
  return (
    <div>
      {data.length === 0 && trending.length === 0 ? (
        <div className="containerSemGifs">
          <p>Nenhum item encontrado!</p>
        </div>
      ) : data.length > 0 ? (
        <>
          <div className="containerSearchInfo">
            <p>
              Você pesquisou por: <span>{anterior.toUpperCase()}</span>
            </p>
            <p>
              Exibindo <span>{data.length}</span> resultados
            </p>
          </div>
          <div className="containerComGifs">
            {data.map((i) => (
              <div className="gifItem">
                <a href={i.bitly_gif_url} target="_blank" rel="noreferrer">
                  <img src={i.images.downsized.url} alt="gif" />
                </a>
              </div>
            ))}
          </div>
        </>
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
