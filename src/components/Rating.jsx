import React from "react";

function Rating({ rating: i, selected, setSelected }) {
  const handleChange = function () {
    console.log(i + 1);
    setSelected(i + 1);
  };

  return (
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
  );
}

export default Rating;
