import React from "react";
import { BsFillSuitHeartFill, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./GigCards.scss";
const GigCards = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCards">
        <img src={item?.img} alt="" />
        <div className="itemDetail">
          <div className="user">
            <img src={item?.profile} alt="" />
            <span>{item?.username}</span>
          </div>
          <p>{item?.desc}</p>
          <div className="star">
            <BsStarFill size={20} color="orange" />
            <span>5</span>
          </div>
          <div className="pricing">
            <BsFillSuitHeartFill size={20} color="lightgray" />

            <div className="price-detail">
              <span>starting at</span>
              <span>${item?.price}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCards;
