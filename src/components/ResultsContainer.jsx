import { useEffect } from "react";
import { useState } from "react";
import {
  useInputDispatch,
  useInputs,
  useResetContext,
} from "../contexts/TipContext";
import { Result } from "./Result";

/**
 * This function calculates the tip amount and total bill per person based on the given bill amount, tip percentage, and number of people.
 *
 * @param {number} bill - The total bill amount.
 * @param {number} percent - The tip percentage.
 * @param {number} numPeople - The number of people sharing the bill.
 * @returns {object} - An object containing the total bill per person and the tip amount, both rounded to two decimal places.
 */
function calTotal(bill, percent, numPeople) {
  if (numPeople === "" || numPeople === "0" || numPeople < 0) {
    const tip = 0;
    const totalPerson = 0;
    return { totalPerson: totalPerson.toFixed(2), tip: tip.toFixed(2) };
  } else {
    const tip = ((percent / 100) * bill) / numPeople;
    const totalPerson = bill / numPeople + tip;
    return { totalPerson: totalPerson.toFixed(2), tip: tip.toFixed(2) };
  }
}

/**
 * This component is responsible for displaying the calculated tip amount and total bill.
 * It also includes a reset button to clear all inputs and reset the state.
 *
 * @returns {JSX.Element} - A React component for displaying results and reset button.
 */
export function ResultsContainer() {
  // State variables for tip amount, total bill, and reset button visibility
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [reset, setReset] = useState(false);

  // Accessing context state and dispatch function
  const inputs = useInputs();
  const dispatch = useInputDispatch();
  const { setSelected } = useResetContext();

  /**
   * This function is called when the reset button is clicked.
   * It resets all state variables and dispatches a reset action to the context.
   */
  const handleReset = () => {
    setTipAmount(0);
    setTotal(0);
    setReset(false);
    setSelected(false);
    dispatch({ type: "RESET" });
  };

  /**
   * This effect calculates the tip amount and total bill based on the input values.
   * It updates the state variables accordingly.
   */
  useEffect(() => {
    const { totalPerson, tip } = calTotal(
      inputs.bill,
      inputs.tipPercent,
      inputs.numPeople
    );
    if (Number(tip) !== 0) {
      setReset(true);
    } else {
      setReset(false);
    }
    setTipAmount(tip);
    setTotal(totalPerson);
  }, [inputs]);

  // JSX code for rendering the results and reset button
  return (
    <div className="container-results">
      <div>
        <Result name={"Tip Amount"} value={tipAmount} />
        <Result name={"Total"} value={total} />
      </div>
      <button
        className={reset ? "button-reset" : "button-reset no-reset"}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
