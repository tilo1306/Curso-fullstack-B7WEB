import { useState, useEffect } from "react";
import { Movie } from "./types/Movie";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadMovie();
  }, []);
  const loadMovie = async () => {
    setLoading(true);
    let response = await fetch("https://api.b7web.com.br/cinema/");
    let json = await response.json();
    setLoading(false);
    setMovies(json);
  };
  return (
    <div>
      {loading && <div> Carregando...</div>}
      {!loading && (
        <>
          <div>Total de Filmes: {movies.length}</div>
          <div>
            {movies.map((item, index) => (
              <div key={index}>
                <img src={item.avatar} alt={item.titulo} />
                {item.titulo}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
