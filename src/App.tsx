import React from "react";
import { Switch, Route } from "react-router-dom";
import PokemonCards from "./components/PokemonCards";
import PokemonSets from "./components/PokemonSets";
const App = () => {
  return (
    <div className="container">
      <h1>Pokemon TCG</h1>
      <Switch>
        <Route exact path="/" component={PokemonSets} />
        <Route exact path="/cards" component={PokemonCards} />
      </Switch>
    </div>
  );
};

export default App;
