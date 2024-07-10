import { useState } from "react";
import { Counter } from "./Counter";

export const Step = () => {
  const [step, setStep] = useState(1);

  function increaseStep() {
    setStep(step + 1);
  }

  function decreaseStep() {
    setStep(step - 1);
  }
  return (
    <>
      <div className="counter">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
        <h3>{step}</h3>
      </div>

      <Counter step={Number(step)} setStep={setStep} />
    </>
  );
};
