import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import "./TodoList.css";
// import { removeTodo, todoAdd } from "../redux/actions/todoActions";
import {
  completedTodo,
  getTodos,
  removeTodo,
  todoAdd,
} from "../redux-toolkit/slice/todoSlice";

export default function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return alert("Vui lòng nhập");
    }
    const todo = {
      id: uuid(),
      name: value,
      completed: false,
    };
    dispatch(todoAdd(todo));
    setValue("");
  };
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  const handleComleted = (id, status) => {
    dispatch(completedTodo({ id, status }));
  };
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              onChange={(e) => handleComleted(todo.id, e.target.checked)}
            />
            <span>{todo.title}</span>
            <button onClick={() => handleRemove(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeValue} value={value} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
