import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="categories">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="About">
            <h2>About</h2>
            <span>Careers</span>
            <span> Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
          </div>
          <div className=" Support">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span> Trust & Safety</span>
            <span>Selling on Fiverr</span>
            <span>Buying on Fiverr</span>
          </div>
          <div className="Community">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span> Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a friend</span>
            <span>Become a seller</span>
            <span>Community Standards</span>
          </div>
          <div className="more">
            <h2>More from Fiverr</h2>
            <span>Fiverr Business</span>
            <span>Fiver pro</span>
            <span> Fiver logo maker</span>
            <span> Fiverr Guides</span>
            <span> Get Inspired</span>
            <span> Fiverr Select</span>
            <span>Clear Voice</span>
            <span> Fiverr Workspaces</span>
            <span>Learn</span>
            <span> Work not Working</span>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="copyright">
              <div className="logo">fiverr</div>
              <div className="cc">© Fiverr International Ltd. 2023</div>
            </div>
            <div className="contact">
              <div className="icons">
                <img src="./img/twitter.svg" alt="" />
                <img src="./img/facebook.svg" alt="" />
                <img src="./img/linkedin.svg" alt="" />
                <img src="./img/pinterest.svg" alt="" />
                <img src="./img/instagram.svg" alt="" />
              </div>
              <div className="links">
                <div className="icon-btn">
                  <img src="./img/earth.png" alt="" />
                  <span>English</span>
                </div>
              </div>
              <div className="links">
                <div className="icon-btn">$ USD</div>
              </div>
              <img src="./img/pose.png" className="t-pose" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
