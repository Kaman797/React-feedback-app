import React, { useContext, useEffect } from "react";
import { useState } from "react";
import feedbackContext from "../context/FeedbackContext";
// import Rating from "./Rating";

function RatingSelect({ setRating }) {
  const [selected, setSelected] = useState(10);
  let ratings = Array.from({ length: 10 }, (_, index) => index);

  //   const handleRating = function (rating) {
  //     setRating(rating);
  //   };

  const { itemEdit } = useContext(feedbackContext);

  useEffect(() => {
    itemEdit ? setSelected(Number(itemEdit.rating)) : setSelected(10);
  }, [itemEdit]);

  const handleChange = function ({ currentTarget: { value } }) {
    setSelected(+value);
    setRating(value);
  };

  return (
    <div>
      <ul className="rating">
        {ratings.map((i) => (
          <li key={`rating-${i + 1}`}>
            <input
              type="radio"
              id={`num${i + 1}`}
              name="rating"
              value={i + 1}
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RatingSelect;
