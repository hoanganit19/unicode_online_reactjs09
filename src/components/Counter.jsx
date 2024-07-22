import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions/counterActions";

export default function Counter() {
  const count = useSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
