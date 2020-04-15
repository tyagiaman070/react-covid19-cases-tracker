import React from "react";
import "./card.css";

const Card = ({
  title = "cases",
  src = "sourcse",
  value = "nil",
  color = "#2C3335",
  colortitle = "#2C3335",
}) => {
  return (
    <div className="Card">
      <span>
        <p style={{ color: colortitle, fontWeight: "bold" }}>
          {title} <img style={{ width: "20px" }} src={src} alt="logo" />
        </p>
      </span>
      <span>
        <h2 style={{ color: color }}> {value} </h2>
      </span>
    </div>
  );
};

export default Card;
