
import './App.css';
import Welcome from './Components/Props01';
import WelcomeTwo from './Components/Props03';
import WelcomeStrong from './Components/Props04';

function App() {
  return (
    <div>
      <Welcome name="PAINZOR" />
      <WelcomeTwo age="23" />
      <WelcomeStrong name={<strong> PAINZOR </strong>} />
    </div>
  );
}

export default App;
