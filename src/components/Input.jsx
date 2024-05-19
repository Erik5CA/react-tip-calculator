import { useState } from "react";
import { useInputDispatch, useInputs } from "../contexts/TipContext";

let value = null;
/**
 * A functional component that renders an input field with a label, image, and error handling.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.action - The action to be dispatched when the input value changes.
 * @param {string} props.img - The source of the image to be displayed next to the input field.
 *
 * @returns {JSX.Element} - The rendered input field component.
 */
export function Input({ name, action, img }) {
  const dispatch = useInputDispatch();
  const inputs = useInputs();
  const [error, setError] = useState(false);

  // Determine the initial value based on the input name
  if (name === "Number of People") {
    value = inputs.numPeople;
  } else {
    value = inputs.bill;
  }

  /**
   * Handles the change event of the input field.
   * Sets the error state if the input value is zero and the input name is "Number of People".
   * Dispatches an action with the updated input value.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const hadleChange = (e) => {
    if (Number(e.target.value) === 0 && name === "Number of People") {
      setError(true);
    } else {
      setError(false);
    }
    dispatch({ type: action, payload: e.target.value });
  };

  return (
    <div className="input-container">
      <div className="container-paragraph">
        <h2 className="title-container">{name}</h2>
        {error ? <h2 className="title-container error">Cant be zero</h2> : ""}
      </div>
      <input
        value={value === 0 ? "" : value}
        type="number"
        min={0}
        className="input"
        placeholder="0"
        onChange={hadleChange}
      />
      <img className="img-input" src={img} alt="" />
    </div>
  );
}
