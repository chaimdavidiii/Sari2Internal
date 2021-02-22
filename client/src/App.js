import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Recipes from "./components/Recipes/RecipesAll";
import "bootstrap/dist/css/bootstrap.min.css";
import Trial from "./components/Trial";
import RecipesNew from "./components/Recipes/RecipesNew";
import RecipesEdit from "./components/Recipes/RecipesEdit";
import RecipesView from "./components/Recipes/RecipesView";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signin} exact />
        <Route path='/recipes' component={Recipes} exact />
        <Route path='/recipes/new' component={RecipesNew} exact />
        <Route path='/trial' component={Trial} exact />
        <Route path='/recipes/:id/edit' component={RecipesEdit} exact />
        <Route path='/recipes/:id/' component={RecipesView} exact />
      </Switch>
    </Router>
  );
}

export default App;
