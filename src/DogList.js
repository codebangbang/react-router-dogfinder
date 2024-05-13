import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div>
      <div className="DogList">
        <h1>Check out our Dogs! Click a name for more details!</h1>
        <div className="DogList-dog">
          {dogs.map(dog => (
            <div className="DogList-dog" key={dog.name}>
              <img
                src={`/${dog.src}.jpg`} alt={dog.name} />
              <h3>
                <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DogList;
