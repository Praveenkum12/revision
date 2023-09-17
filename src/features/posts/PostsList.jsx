import { useSelector } from "react-redux";
import { selectAllPost } from "./postsSlice";

function PostsList() {
  const posts = useSelector(selectAllPost);
  console.log(posts);
  return (
    <section>
      <h2>Posts</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}</p>
        </article>
      ))}
    </section>
  );
}

export default PostsList;
