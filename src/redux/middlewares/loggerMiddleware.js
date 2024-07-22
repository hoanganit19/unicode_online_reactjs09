export const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      const state = store.getState();
      console.log("State: ", state);
      console.log("Action: ", action);
      next(action); //Cho phép action đi tiếp
    };
  };
};
