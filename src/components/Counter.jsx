import { useState } from "react";
import { Text } from "./Text";

export const Counter = ({ step, setStep }) => {
  const [count, setCount] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

  function increase(days) {
    setCount(Number(count) + days);
    let newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);
    setCurrentDate(newDate);
  }

  function decrease(days) {
    setCount(count - days);
    let newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - days);
    setCurrentDate(newDate);
  }
  return (
    <>
      <div className="counter">
        <button onClick={() => decrease(step)}>-</button>
        {/* <h3>Count : {count}</h3> */}
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
            // let newDate = new Date(currentDate);
            // newDate.setDate(currentDate.getDate() + e.target.value);
            // setCurrentDate(newDate);
            // console.log(currentDate.getDate());
          }}
        />
        <button onClick={() => increase(step)}>+</button>
      </div>

      <Text count={count} currentDate={currentDate} />

      {count !== 0 || step !== 1 ? (
        <button
          onClick={() => {
            setStep(1);
            setCount(0);
          }}
        >
          Reset
        </button>
      ) : null}
    </>
  );
};
