import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import InstructionBox from "./components/InstructionBox";
import ResultMessage from "./components/ResultMessage";
import ScoreBox from "./components/ScoreBox";
import SelectLevel from "./components/SelectLevel";
import WordToType from "./components/WordToType";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SelectLevel />
        <WordToType />
        <InputBox
          type="text"
          id="inputField"
          placeholder="Type Here!"
          autofocus={true}
        />
        <ResultMessage />
        <ScoreBox />
        <InstructionBox />
      </div>
    </>
  );
}

export default App;
