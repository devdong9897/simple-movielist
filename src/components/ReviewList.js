import React, { useState } from "react";
import "./ReviewList.css";
import ModalPage from "../Modal/ModalPage";

const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`;
};

const ReviewListItems = ({ item }) => {
  const [modal, setModal] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const handleClick = (item) => {
    setModal(true);
    setMovieSelected(item);
  };

  const handleModalClose = () => {
    setModal(false);
    setMovieSelected(null);
  };

  return (
    <div className="ReviewListItem">
      <img
        className="ReviewListItem-img"
        src={item.imgUrl}
        alt={item.title}
        onClick={() => handleClick(item)}
      />
      <div>
        <h1>{item.title}</h1>
        <p>{item.content}</p>
        <p>{formatDate(item.createdAt)}</p>
      </div>

      {modal && (
        <ModalPage
          item={movieSelected}
          isOpen={modal}
          onClose={handleModalClose}
          formatDate={formatDate}
        />
      )}
    </div>
  );
};

const ReviewList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{<ReviewListItems item={item} />}</li>;
      })}
    </ul>
  );
};

export default ReviewList;
