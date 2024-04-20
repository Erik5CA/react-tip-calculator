import { useContext, useReducer, createContext } from "react";

const InputContext = createContext(null)

const InputDispatchContext = createContext(null)

const initialInputs = {
    bill: "",
    tipPercent: "",
    numPeople: ""
}

function inputReducer(inputs, action){
    switch(action.type){
        case 'SET_BILL':
            return {
               ...inputs,
                bill: action.payload
            }
        case 'SET_TIP_PERCENT':
            return {
               ...inputs,
                tipPercent: action.payload
            }
        case 'SET_NUM_PEOPLE':
            return {
               ...inputs,
                numPeople: action.payload
            }
        case 'RESET':
            return {
               ...inputs,
                bill:"",
                tipPercent: "",
                numPeople: ""
            }
        default:
            return inputs
    }
}

export function useInputs() {
  return useContext(InputContext);
}
export function useInputDispatch() {
  return useContext(InputDispatchContext);
}

export function InputProvider({children}){
    const [inputs, dispatch] = useReducer(inputReducer, initialInputs)
    return (
        <InputContext.Provider value={inputs}>
            <InputDispatchContext.Provider value={dispatch}>
                {children}
            </InputDispatchContext.Provider>
        </InputContext.Provider>
    )
}

