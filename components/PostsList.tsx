import Post from "./Post";

export default function PostsList({ posts }) {
  return (
    <div>
      {posts.map((p) => (
        <Post key={p.id} {...p}></Post>
      ))}
    </div>
  );
}
