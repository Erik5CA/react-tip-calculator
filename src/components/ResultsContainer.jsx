import { useEffect } from "react";
import { useState } from "react";
import { useInputDispatch, useInputs } from "./TipContext";
import { Result } from "./Result";
import { useResetContext } from "../App";

function calTotal(bill, percent, numPeople){
    if(numPeople === "" || numPeople === "0" || numPeople < 0){
        const tip = 0
        const totalPerson = 0
        return { totalPerson: totalPerson.toFixed(2), tip: tip.toFixed(2) };
    } else {
        const tip = ((percent / 100) * bill) / numPeople;
        const totalPerson = bill / numPeople + tip;
        return {totalPerson: totalPerson.toFixed(2), tip: tip.toFixed(2)};
    }
}

export function ResultsContainer() {
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [reset, setReset] = useState(false)
  const inputs = useInputs();
  const dispatch = useInputDispatch()
  const { setSelected } = useResetContext();

  const handleReset = () => {
    setTipAmount(0);
    setTotal(0);
    setReset(false);
    setSelected(false);
    dispatch({type:'RESET'})
  }

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

  return (
    <div className="container-results">
      <div>
        <Result name={"Tip Amount"} value={tipAmount} />
        <Result name={"Total"} value={total} />
      </div>
      <button className={reset ? "button-reset" : "button-reset no-reset"} onClick={handleReset}>Reset</button>
    </div>
  );
}
