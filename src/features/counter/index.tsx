import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
  selectCounter,
} from "app/slice/exampleSlice";
import React from "react";
const Counter = () => {
  const counter = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();
  const handeldecrement = () => {
    dispatch(decrementCounter());
  };
  const handelincrement = () => {
    dispatch(incrementCounter());
  };
  const handelreset = () => {
    dispatch(resetCounter());
  };
  return (
    <div>
      <h3>{counter}</h3>
      <Button onClick={handelincrement}>Increment counter</Button>
      <Button onClick={handeldecrement}>Decrement counter</Button>
      <Button onClick={handelreset}>Reset counter</Button>
    </div>
  );
};

export default Counter;
