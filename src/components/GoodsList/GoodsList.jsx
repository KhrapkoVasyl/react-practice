import React from 'react';
import './GoodsList.css';

const GoodCard = ({ name, price, img }) => {
  return (
    <li className="good-card">
      <div className="product-img-container">
        <img src={img} alt={name} />
      </div>
      <div className="product-details">
        <h4>Name: {name}</h4>
        <p>Price: ${Number(price).toFixed(2)}</p>
      </div>
    </li>
  );
};

const GoodCardsList = ({ renderItem, data }) => {
  return (
    <ul className="good-cards-list">{data.map((item) => renderItem(item))}</ul>
  );
};

GoodCardsList.Item = GoodCard;

export default GoodCardsList;
