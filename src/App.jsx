import { useState, useEffect } from "react";
import PostList from "./components/PostList";
import LoadMoreButton from "./components/LoadMoreButton";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      if (loading) return;

      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
        );
        if (!res.ok) throw new Error("Erro na API");
        const novosPosts = await res.json();

        setPosts((prev) => [...prev, ...novosPosts]);
        setHasMore(novosPosts.length === 10);
      } catch {
        setError("Não foi possível carregar os posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="app">
      <h1>Posts – Recuperativa Ind5</h1>

      {loading && posts.length === 0 && (
        <div className="spinner" aria-label="Carregando posts" />
      )}

      {error && (
        <div className="erro">
          <p>{error}</p>
          <button
            onClick={() => {
              setError(null);
              setPage((p) => p);
            }}
          >
            Tentar novamente
          </button>
        </div>
      )}

      <PostList posts={posts} />

      <LoadMoreButton onClick={loadMore} loading={loading} hasMore={hasMore} />
    </div>
  );
}

export default App;
