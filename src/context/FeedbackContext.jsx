import React, { useState } from "react";
import { createContext } from "react";
import FeedbackData from "../data/feedbackData";

const feedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([
    {
      id: 13232,
      rating: 8,
      text: "This is from context",
    },
    ...FeedbackData,
  ]);

  const [itemEdit, setItemEdit] = useState(null);

  const handleDelete = function (itemId) {
    setFeedback((feedback) => {
      return feedback.filter((item) => item.id !== itemId);
    });
  };

  const handleAdd = function (text, rating) {
    if (itemEdit) {
      setFeedback((prevfeedback) => {
        prevfeedback.map((item) => {
          if (item.id === itemEdit.id) {
            console.log("Item id matched");
            item.rating = Number(rating);
            item.text = text;
          }
          return item;
        });
        return prevfeedback;
      });
      setItemEdit(null);
      return;
    }

    setFeedback((prev) => [
      ...prev,
      {
        id: Math.random() * Math.random() + "x",
        rating,
        text,
      },
    ]);
  };

  return (
    <feedbackContext.Provider
      value={{
        feedback,
        itemEdit,
        setItemEdit,
        setFeedback,
        handleDelete,
        handleAdd,
      }}
    >
      {children}
    </feedbackContext.Provider>
  );
}

export default feedbackContext;
