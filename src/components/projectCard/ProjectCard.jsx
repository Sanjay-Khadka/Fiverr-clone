import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";
const ProjectCard = ({ item }) => {
  return (
    <Link to="/gig?cat=design" className="link">
      <div className="ProjectCard">
        <img src={item.img} alt="" />
        <div className="details">
          <img src={item.profile} alt="" />
          <div className="usergig">
            <span className="desc">{item.cat}</span>
            <span className="title">{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
