import React, { useContext } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import feedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { handleDelete, itemEdit, setItemEdit } = useContext(feedbackContext);

  const handleClick = function () {
    handleDelete(item.id);
  };

  const handleClickUpdate = function () {
    setItemEdit(item);
  };

  return (
    <Card key_={item.id} blurr={itemEdit && itemEdit.id === item.id}>
      <div className="num-display">{item.rating}</div>
      <button onClick={handleClick} className="close">
        <FaTimes />
      </button>
      <button
        className={`edit {editItem.id===item.id && 'edit-feedback'}`}
        onClick={handleClickUpdate}
      >
        <FaEdit color="purple" size={15}></FaEdit>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
