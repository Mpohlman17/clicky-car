//sets up the reusable VehicleCard component
import React from "react";
import "./VehicleCard.css";

//pass the image into each card so all 12 are rendered
const VehicleCard = props => (
  <div
    className="card"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default VehicleCard;
