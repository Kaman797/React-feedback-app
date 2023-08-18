import React from "react";

function Card({ children, blurr }) {
  return <div className={"card " + (blurr && "feedback-edit")}>{children}</div>;
}

export default Card;
