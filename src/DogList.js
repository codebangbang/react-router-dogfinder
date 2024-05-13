import React from "react";
import DogDetail from "./DogDetail";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./Nav";

function DogList() {
    return (
        <div>
            <h1>Dog List</h1>
            <BrowserRouter>
            <Nav />
            <Route exact path="/dogs/:name">
                <DogDetail />
            </Route>
            </BrowserRouter>
        </div>
    );
}

export default DogList;