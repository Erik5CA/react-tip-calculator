import {
  useInputDispatch,
  useInputs,
  useResetContext,
} from "../contexts/TipContext";
import iconDollar from "../images/icon-dollar.svg";
import iconPerson from "../images/icon-person.svg";
import { Input } from "./Input";
import { ButtonOption } from "./ButtonOption";

const values = [5, 10, 15, 25, 50];

/**
 * This function represents the InputsContainer component.
 * It is responsible for rendering the bill, tip percentage, and number of people inputs.
 * It also handles the state management for these inputs using the TipContext.
 *
 * @returns {JSX.Element} - The JSX element representing the InputsContainer component.
 */
export function InputsContainer() {
  // Get the dispatch function from the TipContext to update the state
  const dispatch = useInputDispatch();

  // Get the current state of the inputs from the TipContext
  const inputs = useInputs();

  // Get the selected tip percentage and the setSelected function from the ResetContext
  const { selected, setSelected } = useResetContext();

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
