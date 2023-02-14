import React, { useState } from "react";
import GigCards from "../../components/gigCards/GigCards";
import { gigs } from "../../data";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Gigs.scss";
const Gigs = () => {
  const [isOpen, setOpen] = useState(false);
  const [sortBy, setSort] = useState("sales");

  const setFilter = (sortType) => {
    setOpen(false);
    setSort(sortType);
  };
  return (
    <div className="gig">
      <div className="container">
        <span>webdesign/what/the</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artist
        </p>
        <div className="menu">
          <div className="inputs">
            <span>Budget</span>
            <input placeholder="min" />
            <input placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="filter">
            Sort by
            <span onClick={() => setOpen(!isOpen)}>
              {sortBy === "sales" ? "Best Selling" : "Newest"}
            </span>
            <MdKeyboardArrowDown />
            {isOpen && (
              <div className="options">
                {sortBy !== "createdAt" && (
                  <span onClick={() => setFilter("createdAt")}>Newest</span>
                )}
                {sortBy !== "sales" && (
                  <span onClick={() => setFilter("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="gig-container">
          {gigs.map((gig) => (
            <GigCards key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
