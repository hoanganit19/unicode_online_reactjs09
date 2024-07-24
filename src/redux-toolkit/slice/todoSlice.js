import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getTodos } from "../middlewares/todoMiddleware";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    status: "idle",
  },
  reducers: {
    // loadTodos: (state, action) => {
    //   state.todoList = action.payload;
    // },
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
  extraReducers: (builder) => {
    //pending
    builder.addCase(getTodos.pending, (state) => {
      state.status = "pending";
    });

    //fulfilled
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.status = "idle";
      state.todoList = action.payload;
    });

    //rejected
    builder.addCase(getTodos.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { todoAdd, removeTodo, completedTodo, loadTodos } =
  todoSlice.actions;

//Selector
export const selectorTodoList = (state) => state.todo.todoList;
export const selectorStatus = (state) => state.todo.status;
export const selectorTodoListCompleted = createSelector(
  [selectorTodoList],
  (todoList) => todoList.filter((todo) => todo.completed)
);
