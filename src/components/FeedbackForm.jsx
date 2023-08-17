import React, { useContext } from "react";
import Card from "./shared/Card";
import { useState } from "react";
import RatingSelect from "./RatingSelect";
import feedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const { handleAdd } = useContext(feedbackContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");
  // const [selected, setSelected] = useState(10);

  const handleChange = function ({ target: { value } }) {
    setText(value);
    if (!value) {
      setMessage("");
      return;
    }

    if (value.trim().length > 10) {
      setIsDisabled(false);
      setMessage("");
    } else setMessage("Feedback must be atleast 10 characters long.");
  };

  const handleSend = function (e) {
    e.preventDefault();
    handleAdd(text, rating);

    if (!text || text.trim().length < 10) return;

    setText("");
    setRating(10);
    setIsDisabled(true);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect setRating={setRating} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Write a review"
            value={text}
          />
          <button
            type="submit"
            onClick={handleSend}
            style={{ backgroundColor: "cyan" }}
            disabled={isDisabled}
          >
            Send
          </button>
        </div>
      </form>
      {message && (
        <div className="message" style={{ color: "red" }}>
          {message}
        </div>
      )}
    </Card>
  );
}

export default FeedbackForm;
