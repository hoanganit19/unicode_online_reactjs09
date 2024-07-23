import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    loadTodos: (state, action) => {
      state.todoList = action.payload;
    },
    todoAdd: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    completedTodo: (state, action) => {
      //status
      //id
      const { status, id } = action.payload;
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = status;
        }
        return todo;
      });
    },
  },
});

export const { todoAdd, removeTodo, completedTodo, loadTodos } =
  todoSlice.actions;

//Redux Thunk
export const getTodos = () => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    dispatch(loadTodos(data));
  };
};
