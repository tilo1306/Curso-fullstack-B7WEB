import { useState, useEffect } from "react";
import { Movie } from "./types/Movie";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    loadMovie();
  }, []);
  const loadMovie = async () => {
    let response = await fetch("https://api.b7web.com.br/cinema/");
    let json = await response.json();
    setMovies(json);
  };
  return (
    <div>
      Total de Filmes: {movies.length}
      <div>
        {movies.map((item, index) => (
          <div key={index}>
            <img src={item.avatar} alt={item.titulo} />
            {item.titulo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
