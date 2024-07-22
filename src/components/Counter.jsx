import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => {
    return state.counter.count;
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
