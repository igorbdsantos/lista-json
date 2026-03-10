function PostCard({ post }) {
  return (
    <div className="post-card" role="listitem">
      <small className="user-id">User {post.userId}</small>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 150)}...</p>
    </div>
  );
}

export default PostCard;