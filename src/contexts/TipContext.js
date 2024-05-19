import { useContext, createContext } from "react";

export const InputContext = createContext(null);

export const InputDispatchContext = createContext(null);

export const ResetContext = createContext(null);

export const initialInputs = {
  bill: "",
  tipPercent: "",
  numPeople: "",
};

/**
 * A reducer function for managing the state of bill, tip percent, and number of people.
 *
 * @function inputReducer
 * @param {Object} inputs - The current state of inputs.
 * @param {Object} action - The action to be performed.
 * @param {string} action.type - The type of action to be performed.
 * @param {any} action.payload - The data associated with the action.
 * @returns {Object} - The new state of inputs after applying the action.
 *  The available action types are:
 * - "SET_BILL": Updates the bill amount.
 * - "SET_TIP_PERCENT": Updates the tip percentage.
 * - "SET_NUM_PEOPLE": Updates the number of people sharing the bill.
 * - "RESET": Resets all input fields to their initial values.
 */
export function inputReducer(inputs, action) {
  switch (action.type) {
    case "SET_BILL":
      return {
        ...inputs,
        bill: action.payload,
      };
    case "SET_TIP_PERCENT":
      return {
        ...inputs,
        tipPercent: action.payload,
      };
    case "SET_NUM_PEOPLE":
      return {
        ...inputs,
        numPeople: action.payload,
      };
    case "RESET":
      return {
        ...inputs,
        bill: "",
        tipPercent: "",
        numPeople: "",
      };
    default:
      return inputs;
  }
}

export function useInputs() {
  return useContext(InputContext);
}

export function useInputDispatch() {
  return useContext(InputDispatchContext);
}

export function useResetContext() {
  return useContext(ResetContext);
}
