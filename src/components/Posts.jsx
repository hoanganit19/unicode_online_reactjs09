import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsMiddleware } from "../redux/middlewares/postsMiddleware";
// import { fetchPosts } from "../redux/actions/postActions";

export default function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postsMiddleware());
  }, [dispatch]);
  if (status === "error") {
    return <h2>Error</h2>;
  }
  return (
    <div>
      <h2>Posts</h2>
      {status === "pending" ? (
        <h2>Loading...</h2>
      ) : (
        posts.map((post) => <h3 key={post.id}>{post.title}</h3>)
      )}
    </div>
  );
}
