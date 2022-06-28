
import './App.css';
import ClickCounter from './Components/useEffect01';
import ClickCounterTwo from './Components/useEffect02';

function App() {
  const onCounterChange = (counter) => console.log(`the counter is ${counter}`)
  return (
    <div className="App">
      <ClickCounter change={onCounterChange} initialValue={0} />
      <ClickCounterTwo />
    </div>
  );
}


export default App;
