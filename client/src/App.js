import Home from "./pages";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Recipes from "./components/Recipes/RecipesAll";
import "bootstrap/dist/css/bootstrap.min.css";
import Trial from "./components/Trial";
import RecipesNew from "./components/Recipes/RecipesNew";
import RecipesEdit from "./components/Recipes/RecipesEdit";
import RecipesView from "./components/Recipes/RecipesView";
import Orders from "./components/Orders";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";
import "./App.css";
import ProtectedRoute from "./auth/protected-route";
import Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";

function App() {
  const { isLoading } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signin} exact />
        <ProtectedRoute path='/recipes' component={Recipes} exact />
        <ProtectedRoute path='/recipes/new' component={RecipesNew} exact />
        <Route path='/trial' component={Trial} exact />
        <ProtectedRoute path='/order' component={Orders} exact />
        <ProtectedRoute
          path='/recipes/:id/edit'
          component={RecipesEdit}
          exact
        />
        <ProtectedRoute path='/recipes/:id/' component={RecipesView} exact />
      </Switch>
    </>
  );
}

export default App;
