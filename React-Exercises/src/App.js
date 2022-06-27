import InteractiveWelcome from "./Components/Forms01";
import Login from "./Components/Forms02";
import Login2 from "./Components/Forms03";
import Login3 from "./Components/Forms04";
import UncontrolledLogin from "./Components/Forms05";
import UncontrolledLogin2 from "./Components/Forms06";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div>
      <InteractiveWelcome />
      <Login />
      <Login2 />
      <Login3 />
      <UncontrolledLogin />
      <UncontrolledLogin2 />
      <Welcome value={this.state.track} />
    </div>
  );
}

export default App;
