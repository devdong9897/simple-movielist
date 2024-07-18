import React from "react";
import "./ReviewList.css";

const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`;
};

const ReviewListItems = ({ item }) => {
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.content}</p>
        <p>{formatDate(item.createdAt)}</p>
      </div>
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
