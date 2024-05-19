import { useInputDispatch } from "../contexts/TipContext";

/**
 * A functional component that renders a button with a tip percentage option.
 *
 * @param {Object} props - The component's props.
 * @param {number} props.value - The tip percentage value.
 * @param {boolean} props.selected - Indicates if the button is selected.
 * @param {Function} props.setSelected - A function to set the selected tip percentage.
 *
 * @returns {JSX.Element} - A button element with the tip percentage value.
 */
export function ButtonOption({ value, selected, setSelected }) {
  // Get the dispatch function from the TipContext
  const dispatch = useInputDispatch();

  // Handle button click event
  const handleSected = () => {
    setSelected(value); // Set the selected tip percentage
    dispatch({ type: "SET_TIP_PERCENT", payload: value }); // Dispatch an action to update the tip percentage in the context
  };

  // Render the button element
  return (
    <button
      className={selected ? "button-option selected" : "button-option"} // Apply selected class if the button is selected
      onClick={handleSected} // Call handleSelected function on button click
    >
      {value}%
    </button>
  );
}
