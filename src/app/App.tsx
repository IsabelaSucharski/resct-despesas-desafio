import { Despesas } from "./Despesas";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Login } from "./Login";
import { useEffect, useState } from "react";
import { authContext } from "./authContext";
import { getUserEndpoint, IUser } from "./backend";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUserEndpoint().then(setUser, onSignOut);
  }, []);

  function onSignOut() {
    setUser(null);
  }

  if (user) {
    return (
      <authContext.Provider value={{ user, onSignOut }}>
        <Router>
          <Switch>
            <Route path="/despesas/:anoMes">
              <Despesas />;
            </Route>
            <Redirect to={{ pathname: "/despesas/2021-03" }} />
          </Switch>
        </Router>
      </authContext.Provider>
    );
  } else {
    return <Login onSignIn={setUser} />;
  }
}

export default App;
