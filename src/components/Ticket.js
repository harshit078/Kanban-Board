import React from "react";
import CardComponent from "./Card";

import { WarningFilled } from "@ant-design/icons";

const Ticket = ({ ticket }) => {
  const { title, status, priority } = ticket;

  return (
    <CardComponent
      title={title}
      description={
        <>
          <span>Status: {status}</span>
          <br />
          <span>
            <WarningFilled style={{ marginRight: "5px", color: "#f70202" }} />
            Priority: {priority}
          </span>
          <br />
        </>
      }
      buttonText="View Details"
    />
  );
};

export default Ticket;
