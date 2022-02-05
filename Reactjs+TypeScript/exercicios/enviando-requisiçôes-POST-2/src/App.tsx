import { useState, useEffect, ChangeEvent } from "react";
import { Posts } from "./types/Posts";

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading] = useState(false);
  const [addTitleText, setAddTitleText] = useState("");
  const [addBodyText, setAddBodyText] = useState("");

  useEffect(() => {
    loadPosts();
  }, []);
  const loadPosts = async () => {
    setLoading(true);
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();
    setLoading(false);
    setPosts(json);
  };

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
  };
  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value);
  };
  const handleAddClick = async () => {
    if (addTitleText && addBodyText) {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: addTitleText,
          body: addBodyText,
          userId: 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let json = await response.json();
      if (json.id) {
        alert("POST adicionado com sucesso!");
      } else {
        alert("Ocorreu algum erro");
      }
    } else {
      alert("Preencha os dados!");
    }
  };

  return (
    <div className="p-5">
      {loading && <div> Carregando...</div>}
      <fieldset className="border-2 mb-3 p-3">
        <legend>Adicionar Novo Post</legend>
        <input
          onChange={handleAddTitleChange}
          value={addTitleText}
          className="block border"
          type="text"
          placeholder="Digite um titulo"
        />
        <textarea
          onChange={handleAddBodyChange}
          className="block border"
          value={addBodyText}
        ></textarea>
        <button className="block border" onClick={handleAddClick}>
          Adicionar
        </button>
      </fieldset>
      {!loading && posts.length > 0 && (
        <>
          <div>Total de Posts: {posts.length}</div>
          <div>
            {posts.map((item, index) => (
              <div key={index} className="my-4">
                <h4 className="font-bold">{item.title}</h4>
                <small>
                  #{item.id} - Usuário: {item.userId}
                </small>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </>
      )}
      {!loading && posts.length === 0 && <div>Não há posts para exibir</div>}
    </div>
  );
}

export default App;
