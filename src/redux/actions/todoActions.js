export const todoAdd = (value) => {
  return {
    type: "todoList/add",
    payload: value,
  };
};
export const removeTodo = (index) => {
  return {
    type: "todoList/remove",
    payload: index,
  };
};
