import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./DogDetails.css";

function DogDetails({ dog }) {
  
  if (!dog) return <Navigate to="/dogs" />;

  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <img src={`/public/${dog.name.toLowerCase()}.jpg`} alt={dog.name} />
      <h2>{dog.age} years old</h2>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
        <Link to="/dogs">Go back</Link>
    </div>
  );
}

export default DogDetails;
