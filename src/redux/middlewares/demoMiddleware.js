export const demoMiddleware = () => {
  return (dispatch, getState) => {
    console.log("Hello from demo middleware");
    console.log(dispatch);
    console.log(getState());
  };
};
