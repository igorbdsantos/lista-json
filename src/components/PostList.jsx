import PostCard from './PostCard';

function PostList({ posts }) {
  return (
    <div className="post-list" role="list" aria-live="polite" aria-busy="false">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;