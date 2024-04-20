import { useState } from "react";
import { useInputDispatch, useInputs } from "./TipContext";

let value = null
export function Input({name, action, img}) {
    const dispatch = useInputDispatch();
    const inputs = useInputs()
    const [error, setError] = useState(false)

    if (name === "Number of People" ){
        value = inputs.numPeople
    }else{
        value = inputs.bill

    }

    const hadleChange = (e) => {
        if (Number(e.target.value) === 0 && name === "Number of People") {
          setError(true);
        } else {
          setError(false);
        }
        dispatch({ type: action, payload: e.target.value });
    }
    
  return (
    <div className="input-container">
      <div className="container-paragraph">
        <h2 className="title-container">{name}</h2>
        {error ? <h2 className="title-container error">Cant be zero</h2> : ""}
      </div>
      <input
        value={value === 0 ? "": value}
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

