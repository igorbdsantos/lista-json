function LoadMoreButton({ onClick, loading, hasMore }) {
  if (!hasMore) return <p className="fim">Não há mais posts</p>;

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="load-more"
      aria-label="Carregar mais posts"
    >
      {loading ? 'Carregando mais posts...' : 'Carregar mais'}
    </button>
  );
}

export default LoadMoreButton;