import { useInputDispatch, useInputs } from "./TipContext";
import iconDollar from "../images/icon-dollar.svg";
import iconPerson from "../images/icon-person.svg";
import { Input } from "./Input";
import { ButtonOption } from "./ButtonOption";
import { useResetContext } from "../App";

const values = [5, 10, 15, 25, 50];

export function InputsContainer() {
  const dispatch = useInputDispatch();
    const inputs = useInputs();
  const {selected, setSelected} = useResetContext()

  return (
    <div className="container-options">
      <Input name={"Bill"} action={"SET_BILL"} img={iconDollar} />
      <div>
        <h2 className="title-container">Select tip %</h2>
        <div className="grid-options">
          {values.map((value) =>
            value == selected ? (
              <ButtonOption
                key={value}
                value={value}
                selected={true}
                setSelected={setSelected}
              />
            ) : (
              <ButtonOption
                key={value}
                value={value}
                selected={false}
                setSelected={setSelected}
              />
            )
          )}
          <input
            type="number"
            min={0}
            max={100}
            value={inputs.tipPercent === 0 ? "" : inputs.tipPercent}
            className={selected === "custom" ? "input selected" : "input"}
            placeholder="Custom"
            onChange={(e) => {
              setSelected("custom");
              dispatch({
                type: "SET_TIP_PERCENT",
                payload: Number(e.target.value),
              });
            }}
          />
        </div>
      </div>
      <Input
        name={"Number of People"}
        action={"SET_NUM_PEOPLE"}
        img={iconPerson}
      />
    </div>
  );
}
