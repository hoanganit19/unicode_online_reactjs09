import { loadPosts, updateStatus } from "../actions/postActions";

export const fetchDataMiddleware = (store) => {
  return (next) => {
    return async (action) => {
      if (action.type === "posts/fetchApi") {
        try {
          store.dispatch(updateStatus("pending"));
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          if (!response.ok) {
            throw Error(response.statusText);
          }

          const data = await response.json();

          store.dispatch(loadPosts(data));
          store.dispatch(updateStatus("idle"));
        } catch {
          store.dispatch(updateStatus("error"));
        }
      }
      next(action);
    };
  };
};
