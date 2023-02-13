import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const currentUser = {
    id: 1,
    username: "sanjay",
    isSeller: true,
  };
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <div className={active ? "navbar active" : "navbar "}>
      <div className="container">
        <div className="logo">
          <Link to="/ " className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!isOpen)}>
              <img
                src="https://th.bing.com/th?id=OIP.iTFRDLPWU5YT9QwQ4f2gsQHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt="user"
              />
              <span>{currentUser.username}</span>
              {isOpen && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add New Gigs</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>test</span>
            <span>test</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
