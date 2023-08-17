import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import feedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { handleDelete } = useContext(feedbackContext);

  const handleClick = function () {
    handleDelete(item.id);
  };

  return (
    <Card key_={item.id}>
      <div className="num-display">{item.rating}</div>
      <button onClick={handleClick} className="close">
        <FaTimes />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
