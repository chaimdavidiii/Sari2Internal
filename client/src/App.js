import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/Signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signin} exact />
      </Switch>
    </Router>
  );
}

export default App;
