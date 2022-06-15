import Counter from "./Components/State01";
import Counter3 from "./Components/State03";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
      <Counter3 initialValue={25}/>
    </>
  );
}

export default App;
