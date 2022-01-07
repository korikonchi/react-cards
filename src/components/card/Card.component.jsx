import React from "react";
import "./card.styles.css";
export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.title.id}?set=set3&size=180x180`}
    />
    <h2> {props.title.name}</h2>
    <p>{props.title.email}</p>
  </div>
);
