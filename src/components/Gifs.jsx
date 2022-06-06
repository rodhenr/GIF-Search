import "../styles/Gifs.scss";

function Gifs({ data, item }) {
  return (
    <div>
      {data.length === 0 ? (
        <div className="containerSemGifs" data-cy="no-gifs">
          <p>Nenhum item para exibir</p>
        </div>
      ) : (
        <>
          <div className="containerSearchInfo">
            <p>
              Você pesquisou por: <span>{item.anterior.toUpperCase()}</span>
            </p>
            <p className="numberElementsInfo">
              Exibindo <span>{data.length}</span> resultados
            </p>
          </div>
          <div className="containerComGifs" data-cy="have-gifs">
            {data.map((i, key) => (
              <div className="gifItem" key={key} data-cy="gif-item">
                <a href={i.bitly_gif_url} target="_blank" rel="noreferrer">
                  <img src={i.images.downsized.url} alt="gif" />
                </a>
              </div>
            ))}
          </div>
          <div className="verMais">
            <button id="verMais">
              <a
                href={`https://giphy.com/search/${item.anterior}`}
                target="_blank"
                rel="noreferrer"
                data-cy="see-more"
              >
                VER MAIS
              </a>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Gifs;
