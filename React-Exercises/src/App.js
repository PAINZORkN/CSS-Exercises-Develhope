
import './App.css';
import { HookCounter } from './Components/CustomHooks01';
import { GithubUser } from './Components/GithubUser';



function App() {
  return (
    <>
      <HookCounter />
      <GithubUser username="PAINZORkN" />
    </>
  );
}

export default App;
