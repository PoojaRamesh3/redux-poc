import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
  changename,
} from "../redux/action";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter);
  const name = useSelector((state: any) => state.defaultName);

  console.log("counter", counter);
  return (
    <>
      <div>
        <div>{counter}</div>
        <div>{name}</div>
        <button onClick={() => dispatch(incrementCounter())}>+1</button>
        <button onClick={() => dispatch(decrementCounter())}>-1</button>
        <button onClick={() => dispatch(resetCounter())}>reset</button>
        <button onClick={() => dispatch(changename("sunil"))}>
          change name
        </button>
      </div>
    </>
  );
};

export default Counter;
