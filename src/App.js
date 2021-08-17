import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";
import Characters from "./pages/Characters/Characters";
import Comics from "./pages/Comics/Comics";
import Favorites from "./pages/Favorites/Favorites";
import ComicsOfChar from "./pages/ComicsOfChar/ComicsOfChar";
import Identify from "./pages/Identify/Identify";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Footer from "./components/Footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [favorite, setFavorite] = useState([]);

  return (
    <Router>
      <Header setName={setName} setTitle={setTitle} />
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/identify">
          <Identify />
        </Route>
        <Route path="/comics/:characterId">
          <ComicsOfChar favorite={favorite} setFavorite={setFavorite} />
        </Route>
        <Route path="/comics">
          <Comics
            name={title}
            setName={setTitle}
            favorite={favorite}
            setFavorite={setFavorite}
          />
        </Route>
        <Route path="/favorites">
          <Favorites favorite={favorite} setFavorite={setFavorite} />
        </Route>
        <Route exact path="/">
          <Characters
            name={name}
            setName={setName}
            favorite={favorite}
            setFavorite={setFavorite}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
