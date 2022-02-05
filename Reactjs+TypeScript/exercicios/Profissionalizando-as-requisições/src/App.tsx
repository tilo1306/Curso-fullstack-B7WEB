import { useState, useEffect } from "react";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
import { Posts } from "./types/Posts";
import { api } from "./api";

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);
  const loadPosts = async () => {
    setLoading(true);
    let json = await api.getAllPosts();
    setLoading(false);
    setPosts(json);
  };

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1);
    if (json.id) {
      alert("POST adicionado com sucesso!");
    } else {
      alert("Ocorreu algum erro");
    }
  };
  return (
    <div className="p-5">
      {loading && <div> Carregando...</div>}
      <PostForm onAdd={handleAddPost} />
      {!loading && posts.length > 0 && (
        <>
          <div>Total de Posts: {posts.length}</div>
          <div>
            {posts.map((item, index) => (
              <div key={index}>
                <PostItem data={item} />
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
