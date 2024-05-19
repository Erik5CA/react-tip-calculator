import "./App.css";
import { InputsContainer } from "./components/InputsContainer";
import { ResultsContainer } from "./components/ResultsContainer";
import { InputProvider } from "./contexts/TipProvider";

/**
 * The main application component.
 * It renders the title, InputProvider, and the container div.
 * The container div contains InputsContainer and ResultsContainer components.
 *
 * @returns {JSX.Element} - The JSX element representing the App component.
 */
function App() {
  return (
    <>
      <h1 className="title"> Splitter </h1>
      <InputProvider>
        <div className="container">
          <InputsContainer />
          <ResultsContainer />
        </div>
      </InputProvider>
    </>
  );
}

export default App;
