import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import { cards, projects } from "../../data";
import Category from "../../components/catCard/Category";
import ProjectCard from "../../components/projectCard/ProjectCard";
const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <Category item={card} key={card.id} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="left-section">
            <h2>A whole world of freelance talent at your fingertips</h2>
            <div className="title">
              <img src="./img/check.svg" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.svg" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.svg" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.svg" alt="" />
              24/7 support
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </div>
          <div className="right-section">
            <video
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
              controls
            />
          </div>
        </div>
      </div>
      <div className="features2">
        <div className="container2">
          <div className="left-section2">
            <h2>
              fiverr <span> business.</span>
            </h2>
            <span className="main-title">
              A business solution designed for <i>teams</i>
            </span>
            <span>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </span>
            <div className="title2">
              <img src="./img/check.svg" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title2">
              <img src="./img/check.svg" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title2">
              <img src="./img/check.svg" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore fiverr business</button>
          </div>
          <div className="right-section2">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
