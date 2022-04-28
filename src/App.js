import Sidebar from "./components/sidebar/Sidebar";
import Meta from "./components/Meta/Meta";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "./components/Common/Loader";
import SignIn from "./page/SignIn";

function App() {
  return (
    <div className="App">
      <Loader pageLoader={true} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/sidebar" />
        </Route>
        <Route path="/sidebar" exact>
          <Sidebar />
        </Route>
        <Route path="/signIn" exact>
          <SignIn />
        </Route>
        <Route path="/meta" exact>
          <Meta />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
