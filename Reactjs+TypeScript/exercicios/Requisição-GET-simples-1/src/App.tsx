import { useState } from "react";
import { Movie } from "./types/Movie";
function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = () => {
    fetch("https://api.b7web.com.br/cinema/")
      .then((response) => response.json())
      .then((json) => setMovies(json));
  };
  return (
    <div className="App">
      <button onClick={loadMovies}>Carregar Filmes</button>
      Total de filmes: {movies.length}
      <div>
        {movies.map((item, index) => (
          <div key={index}>
            <img src={item.avatar} />
            {item.titulo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
