import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div>
      <div className="DogList">
        <h1>Check out our Dogs! Click a pic for more details!</h1>
        {dogs.map((dog) => (
          <div className="DogList-dog" key={dog.name}>
            <img src={`/public/${dog.name.toLowerCase()}.jpg`} alt={dog.name} />
            <h3>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
