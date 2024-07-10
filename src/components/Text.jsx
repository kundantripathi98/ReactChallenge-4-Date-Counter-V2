import { useState } from "react";

export const Text = ({ currentDate, count }) => {
  if (count === 0) {
    return <h1>Today is {currentDate.toDateString()}</h1>;
  } else if (count > 0) {
    return (
      <h1>
        {count} {count === 1 ? "day" : "days"} from Today is{" "}
        {currentDate.toDateString()}
      </h1>
    );
  } else if (count < 0) {
    return (
      <h1>
        {count * -1} {count === -1 ? "day" : "days"} ago Today was{" "}
        {currentDate.toDateString()}
      </h1>
    );
  }
};
