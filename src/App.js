import React, {useState, useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import DogList from "./DogList";
import RouteList from "./RouteList";


function App() {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true,
});

useEffect(() => {
    async function fetchDogs() {
        const res = await axios.get("http://localhost:3001/dogs");
        setDogs({ data: res.data, isLoading: false });
    }
    fetchDogs();
}
, []);

if (dogs.isLoading) {
    return <p>Loading...</p>;
}

return (
    <div className="App">
        <BrowserRouter>
            <Nav dogs={dogs.data} />
            <RouteList dogs={dogs.data} />
        </BrowserRouter>
    </div>
);
}

export default App;
