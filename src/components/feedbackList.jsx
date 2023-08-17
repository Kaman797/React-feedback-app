import React, { useContext } from "react";
import FeedbackItem from "./feedbackItem";
import feedbackContext from "../context/FeedbackContext";

function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(feedbackContext);

  if (!feedback || feedback.length === 0) return <p>No feedback found</p>;

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
