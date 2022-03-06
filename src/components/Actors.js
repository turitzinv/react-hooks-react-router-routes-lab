import React from "react";
import { actors } from "../data";

function Actors() {

  const renderActors = actors.map((actor) => (
    <div key={actor.name}>
      <h2>Name: {actor.name}</h2>
      {actor.movies.map((movie) => <li key={movie}>{movie}</li>)}
    </div>
  ))

  return <div>
    <h1>Actors Page</h1>
    {renderActors}
  </div>;
}

export default Actors;
