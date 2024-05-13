import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./Nav";
import Dogs from "./Dogs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Route exact path="/dogs/:name">
        <Dogs />
      </Route>
      </BrowserRouter>
    </div>
  );
}


export default App;
