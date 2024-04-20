import { useState } from "react";
import "./App.css";
import { InputProvider } from "./components/TipContext";
import { InputsContainer } from "./components/InputsContainer";
import { ResultsContainer } from "./components/ResultsContainer";
import { createContext } from "react";
import { useContext } from "react";

const ResetContext = createContext(null)

export function useResetContext(){
  return useContext(ResetContext)
}

function App() {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <h1 className="title"> Splitter </h1>
      <InputProvider>
      <div className="container">
        <ResetContext.Provider value={{selected,setSelected}}>
        <InputsContainer/>
        <ResultsContainer/>
        </ResetContext.Provider>
      </div>
      </InputProvider>

    </>
  );
}

export default App;
