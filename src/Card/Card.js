import React from "react";
import "./Card.scss";

const Card = (props) => (
  <>
    <div className="card-component">{props.children}</div>
  </>
);

export default Card;
