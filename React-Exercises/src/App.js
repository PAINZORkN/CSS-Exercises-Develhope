import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GithubUser } from './Components/Swr01';




function App() {

  return (
    <Router>
      <div className="App">

        <ul>
          <li>
            <Link to='/'>Welcome</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
          <li>
            <Link to='users'>Users</Link>
          </li>
          <li>
            <Link to='*'>A million Dollar</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element />
          <Route path="counter" element />
          <Route path="users" element={<GithubUser />} />
          <Route path="*" element />
        </Routes>
      </div>
    </ Router>
  );
}

export default App;