import { useInputDispatch } from "./TipContext";

export function ButtonOption({value, selected, setSelected}) {
    const dispatch = useInputDispatch();
    const handleSected = () => {
        setSelected(value);
        dispatch({ type: "SET_TIP_PERCENT", payload: value })
    }
    
  return (
    <button
      className={selected ? "button-option selected" : "button-option"}
      onClick={handleSected}
    >
      {value}%
    </button>
  );
}
