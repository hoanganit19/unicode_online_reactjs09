import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, todoAdd } from "../redux/actions/todoActions";

export default function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return alert("Vui lòng nhập");
    }
    dispatch(todoAdd(value));
    setValue("");
  };
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleRemove = (index) => {
    dispatch(removeTodo(index));
  };
  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleRemove(index)}>&times;</button>
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
