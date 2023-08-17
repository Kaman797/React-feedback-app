import React, { useContext } from "react";
import feedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(feedbackContext);

  let average =
    !feedback.length ||
    feedback.reduce((acc, item) => acc + Number(item.rating), 0) /
      feedback.length;

  average = Math.round(average * 100) / 100;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
