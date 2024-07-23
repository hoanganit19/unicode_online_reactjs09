import { loadPosts, updateStatus } from "../actions/postActions";
export const postsMiddleware = () => {
  return async (dispatch) => {
    try {
      dispatch(updateStatus("pending"));
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(loadPosts(data));
      dispatch(updateStatus("idle"));
    } catch {
      dispatch(updateStatus("error"));
    }
  };
};
