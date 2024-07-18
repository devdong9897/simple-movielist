import React from "react";
import "./ModalPage.css";

const ModalPage = ({ item, isOpen, onClose, formatDate }) => {
  if (!isOpen || !item) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>{item.title}</h2>
        <img src={item.imgUrl} alt={item.title} className="modal-img" />
        <p>{item.content}</p>
        <p>Rating: {item.rating}</p>
        <p>Date: {formatDate(item.createdAt)}</p>
      </div>
    </div>
  );
};

export default ModalPage;
