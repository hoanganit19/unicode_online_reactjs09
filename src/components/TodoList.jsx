import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return alert("Vui lòng nhập");
    }
    dispatch({
      type: "todoList/add",
      payload: value,
    });
    setValue("");
  };
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
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
