import { Login } from './Components/StylingComponents03';
import Welcome from './Components/Welcome';
import './index.css'

function App() {
  return (
    <div className='container'>
     <Welcome name="Luigi"/>
     <Login />
    </div>
  );
}

export default App;
