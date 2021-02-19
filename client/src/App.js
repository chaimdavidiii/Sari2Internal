import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Recipes from "./components/Recipes/RecipesHome";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signin} exact />
        <Route path='/recipes' component={Recipes} exact />
      </Switch>
    </Router>
  );
}

export default App;
