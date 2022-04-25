import "../styles/Gifs.scss";

function Gifs({ data }) {
  return (
    <div className="containerGifs">
      {data.length > 0
        ? data.map((i) => (
            <div>
              <a href={i.bitly_gif_url} target="_blank" rel="noreferrer">
                <img src={i.images.downsized.url} alt="gif" />
              </a>
            </div>
          ))
        : null}
    </div>
  );
}

export default Gifs;
