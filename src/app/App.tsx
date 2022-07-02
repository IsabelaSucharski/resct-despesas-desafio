import { Despesas } from "./Despesas";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HeaderLogin } from "./HeaderLogin";
import { Login } from "./Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login\">
          <Login />
        </Route>
        <Route path="/despesas/:anoMes">
          <HeaderLogin />
          <Despesas />;
        </Route>
        <Redirect to={{ pathname: "/login" }} />
        <Redirect to={{ pathname: "/despesas/2021-03" }} />
      </Switch>
    </Router>
  );
}

export default App;
