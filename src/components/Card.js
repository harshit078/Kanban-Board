import React from "react";
import { CheckCircleFilled, ExclamationCircleFilled } from "@ant-design/icons";
import "./card.css";

function CardComponent({ title, description, buttonText }) {
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        {/* You can add a label here if needed */}
        <div className="imageContainer relative" style={{ width: "30px", height: "30px" }}>
          {/* Add content for imageContainer if needed */}
        </div>
      </div>
      <h5 style={{ fontWeight: 500 }}>
        <CheckCircleFilled style={{ marginRight: "5px", color: "#52c41a" }} />
        {title}
      </h5>
      <p className="card-text">
        <ExclamationCircleFilled style={{ marginRight: "5px", color: "#faad14" }} />
        {description}
      </p>
    </div>
  );
}

export default CardComponent;
