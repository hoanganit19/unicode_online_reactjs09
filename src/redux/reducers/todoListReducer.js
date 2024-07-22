const initialState = {
  todoList: ["Learn React", "Learn Redux"],
};
export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    default:
      return state;
  }
};
