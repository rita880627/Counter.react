import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  oddIncrement,
  incrementAsync
} from "./actions/counterAction";

export default function Counter() {
  const counterState = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();

  const handleIncrementAsync = () => {
    dispatch(incrementAsync());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleOddIncrement = () => {
    dispatch(oddIncrement());
  };

  return (
    <>
      <div className="container">
        <button className="decrement" onClick={handleDecrement}>
          -
        </button>
        <div className="count">{counterState.count}</div>
        <button className="increment" onClick={handleIncrement}>
          +
        </button>
      </div>

      <div className="btn">
        <button className="Async" onClick={handleIncrementAsync}>
          Add Async
        </button>
        <button className="Odd" onClick={handleOddIncrement}>
          Add if Odd
        </button>
      </div>
    </>
  );
}
