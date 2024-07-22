import { useSelector, useDispatch } from "react-redux";
export default function App() {
  const count = useSelector((state) => {
    return state.count;
  });
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "counter/increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "counter/decrement" });
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
