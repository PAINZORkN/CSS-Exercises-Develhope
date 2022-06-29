
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ClickCounter } from './Components/Counter';
import { GithubUser } from './Components/GithubUser';
import { GithubUsersList } from './Components/GithubUserList';
import { NotFound } from './Components/NotFound';
import { Welcome } from './Components/Welcome';

function App() {


  return (

    <Router>
      <div className="App">

        <div>
          <ul>
            <li>
              <Link to="/" > Welcome </Link>
            </li>
            <li>
              <Link to="/counter" > Counter </Link>
            </li>
            <li>
              <Link to="/users/:username" > Username </Link>
            </li>
            <li>
              <Link to="*" > NotFound </Link>
            </li>
          </ul>

        </div>
        <Routes>

          <Route path="/" element={<Welcome name="PAINZOR" />} />
          <Route path="/counter" element={<ClickCounter />} />
          <Route path="/users/:username" element={<GithubUser username="PAINZORkN" />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/users" element={<GithubUsersList />} >
            <Route path=":username" element={<GithubUser />} />
          </Route>


        </Routes>
      </div>
    </Router>
  );
}

export default App;