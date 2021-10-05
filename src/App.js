import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Wedding from "./pages/wedding";
import PartyP from "./pages/partyP";
import Grad from "./pages/grad";
import GlobalStyle from "./styles/global";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div className="Header">
        <ul>
          <li>
            <Link to="/">home </Link>
          </li>
          <li>
            <Link to="/wedding">wedding </Link>
          </li>
          <li>
            <Link to="/grad">grad</Link>
          </li>
          <li>
            <Link to="/party">party</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/wedding">
          <Wedding />
        </Route>

        <Route path="/grad">
          <Grad />
        </Route>

        <Route path="/party">
          <PartyP />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
