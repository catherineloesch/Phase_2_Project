import React from "react"
import './App.css';
import NavBar from "./NavBar";
import TodoApplication from './TodoApplication';
import ShoppingApplication from "./ShoppingApplication";
import Timer from "./Timer";
import Api from "./Api";
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      { /* working title ?? */ }
      <h1>Productivity Ninja</h1>
      <NavBar />
      <Switch>
          <Route exact path="/todo-list">
            <TodoApplication />
          </Route>

          <Route exact path="/shopping-list">
            <ShoppingApplication/>
          </Route>

          <Route exact path="/timer">
            <Timer />
          </Route>

          <Route exact path="/api">
            <Api />
          </Route>

      </Switch>

      

    </div>
    
  );
}

export default App;

