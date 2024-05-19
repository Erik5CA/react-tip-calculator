import { useReducer } from "react";
import {
  InputContext,
  InputDispatchContext,
  ResetContext,
  initialInputs,
  inputReducer,
} from "./TipContext";
import { useState } from "react";

/**
 * A React component that provides context for managing input fields.
 * It uses the useReducer hook to manage the state of the inputs,
 * and the useState hook to manage the selected state.
 *
 * @param {Object} props - The props passed to the component.
 * @param {React.ReactNode} props.children - The children components to be rendered within the provider.
 *
 * @returns {React.ReactElement} - The InputProvider component with the necessary context providers.
 */
export function InputProvider({ children }) {
  // Use the useReducer hook to manage the state of the inputs.
  // The inputReducer function is used to update the state based on dispatched actions.
  // The initialInputs object is used as the initial state.
  const [inputs, dispatch] = useReducer(inputReducer, initialInputs);

  // Use the useState hook to manage the selected state.
  // The selected state is initially set to false.
  const [selected, setSelected] = useState(false);

  // Return the InputProvider component with the necessary context providers.
  // The InputContext provides the current state of the inputs.
  // The InputDispatchContext provides the dispatch function to update the inputs state.
  // The ResetContext provides the selected state and the setSelected function to update it.
  return (
    <InputContext.Provider value={inputs}>
      <InputDispatchContext.Provider value={dispatch}>
        <ResetContext.Provider value={{ selected, setSelected }}>
          {children}
        </ResetContext.Provider>
      </InputDispatchContext.Provider>
    </InputContext.Provider>
  );
}
