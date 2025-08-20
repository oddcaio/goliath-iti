import React from "react";
import "./CardInfo.css";

const CardInfo = ({ title, value }) => (
  <div className="card-info">
    <div className="card-title">{title}</div>
    <div className="card-value">{value}</div>
  </div>
);

export default CardInfo;
