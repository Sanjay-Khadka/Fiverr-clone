import { Slider } from "infinite-react-carousel/lib";
import React from "react";
import { GiUsaFlag } from "react-icons/gi";
import { BsStarFill, BsCheckLg } from "react-icons/bs";
import { ImLoop2 } from "react-icons/im";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineClockCircle,
} from "react-icons/ai";
import "./Gig.scss";
const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left-section">
          <span>check/asdfasf/asdf</span>
          <h1>I will create ai generated art for you </h1>
          <div className="user-rating">
            <img
              src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfC5aEAZZ2MvtWvSq5Lw_Caq2oP64BQSQwMuP5nfLUf8UQ&oe=63F0B40D"
              alt=""
            />
            <span>sanjay khadka</span>
            <BsStarFill color="orange" size={20} />
            <BsStarFill color="orange" size={20} />
            <BsStarFill color="orange" size={20} />
            <BsStarFill color="orange" size={20} />
            <BsStarFill color="orange" size={20} />
          </div>
          <div className="gig-detail">
            <Slider slidesToShow={1} arrowsScroll={1}>
              <img
                src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfC5aEAZZ2MvtWvSq5Lw_Caq2oP64BQSQwMuP5nfLUf8UQ&oe=63F0B40D"
                alt=""
              />
              <img
                src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfC5aEAZZ2MvtWvSq5Lw_Caq2oP64BQSQwMuP5nfLUf8UQ&oe=63F0B40D"
                alt=""
              />
              <img
                src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfC5aEAZZ2MvtWvSq5Lw_Caq2oP64BQSQwMuP5nfLUf8UQ&oe=63F0B40D"
                alt=""
              />
              <img
                src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfC5aEAZZ2MvtWvSq5Lw_Caq2oP64BQSQwMuP5nfLUf8UQ&oe=63F0B40D"
                alt=""
              />
              <img
                src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfC5aEAZZ2MvtWvSq5Lw_Caq2oP64BQSQwMuP5nfLUf8UQ&oe=63F0B40D"
                alt=""
              />
            </Slider>

            <h2>About this Gig</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              nisi earum illum aliquam. Ipsam totam aliquam earum quis
              perferendis aut dicta excepturi distinctio reprehenderit soluta!
              Labore dicta magnam eveniet praesentium non sequi error maiores
              consequatur quos facilis in eligendi iusto libero ad temporibus
              nemo ipsam minima id unde perferendis porro, iste ipsa rerum.
              Repellat, itaque assumenda? Excepturi unde quisquam at eaque
              beatae fuga eum quis fugit laudantium cupiditate debitis mollitia,
              soluta vel aspernatur a quae in placeat harum quasi voluptatum quo
              voluptates voluptatem quas aliquam? Culpa debitis possimus sint
              nemo odio, fugit soluta magnam explicabo iusto veritatis odit vel
              dolor.
            </p>
            <div className="seller">
              <h2>About the seller</h2>
              <div className="seller-detail">
                <img
                  src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfC5aEAZZ2MvtWvSq5Lw_Caq2oP64BQSQwMuP5nfLUf8UQ&oe=63F0B40D"
                  alt=""
                />
                <div className="info">
                  <span>sanjay khadka</span>
                  <div className="rating">
                    <BsStarFill size={16} color="orange" />
                    <BsStarFill size={16} color="orange" />
                    <BsStarFill size={16} color="orange" />
                    <BsStarFill size={16} color="orange" />
                  </div>
                  <button>Contact Me</button>
                </div>
              </div>
              <div className="detail">
                <div className="top">
                  <div className="left">
                    <div className="address">
                      <span>From</span>
                      <p>Golfutar Kathmandu</p>
                    </div>
                    <div className="response-time">
                      <span>Avg response time</span>
                      <p>1 hour</p>
                    </div>
                    <div className="language">
                      <span>Language</span>
                      <p>English</p>
                    </div>
                  </div>
                  <div className="right">
                    <div className="member">
                      <span>Member Since</span>
                      <p>Aug 2022</p>
                    </div>
                    <div className="last delivery">
                      <p>Last delivery</p>
                      <p>1 day ago</p>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    My name is sanjay khadka and I love generating interesting
                    ai images in my spare time. I have a lot of experience with
                    AI tools and can generate very good AI prompts for your
                    specific needs
                  </p>
                </div>
              </div>
            </div>
            <div className="reviews">
              <h2>Reviews</h2>
              <div className="item">
                <div className="user">
                  <img
                    src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfC5aEAZZ2MvtWvSq5Lw_Caq2oP64BQSQwMuP5nfLUf8UQ&oe=63F0B40D"
                    alt=""
                  />
                  <div className="info">
                    <span>sanjay khadka</span>
                    <div className="country">
                      <img
                        src="https://th.bing.com/th/id/R.65d53c06f3be2d216004ee4ebb6405a1?rik=rLr9U5v7UHx41A&pid=ImgRaw&r=0"
                        alt=""
                      />
                      <span>Nepal</span>
                    </div>
                  </div>
                </div>
                <div className="rating">
                  <BsStarFill size={16} color="orange" />
                  <BsStarFill size={16} color="orange" />
                  <BsStarFill size={16} color="orange" />
                  <BsStarFill size={16} color="orange" />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum voluptates doloremque quod sit! Reprehenderit, ab ea
                  assumenda, velit consectetur ullam fugit quasi, quibusdam
                  sapiente commodi nobis magnam. Ipsum, sapiente nostrum.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <AiOutlineLike size={20} />
                  <span>Yes</span>
                  <AiOutlineDislike size={20} />
                  <span>no</span>
                </div>
              </div>
              <div className="item">
                <div className="user">
                  <img
                    src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfC5aEAZZ2MvtWvSq5Lw_Caq2oP64BQSQwMuP5nfLUf8UQ&oe=63F0B40D"
                    alt=""
                  />
                  <div className="info">
                    <span>sanjay khadka</span>
                    <div className="country">
                      <img
                        src="https://th.bing.com/th/id/R.65d53c06f3be2d216004ee4ebb6405a1?rik=rLr9U5v7UHx41A&pid=ImgRaw&r=0"
                        alt=""
                      />
                      <span>Nepal</span>
                    </div>
                  </div>
                </div>
                <div className="rating">
                  <BsStarFill size={16} color="orange" />
                  <BsStarFill size={16} color="orange" />
                  <BsStarFill size={16} color="orange" />
                  <BsStarFill size={16} color="orange" />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum voluptates doloremque quod sit! Reprehenderit, ab ea
                  assumenda, velit consectetur ullam fugit quasi, quibusdam
                  sapiente commodi nobis magnam. Ipsum, sapiente nostrum.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <AiOutlineLike size={20} />
                  <span>Yes</span>
                  <AiOutlineDislike size={20} />
                  <span>no</span>
                </div>
              </div>
              <div className="item">
                <div className="user">
                  <img
                    src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfC5aEAZZ2MvtWvSq5Lw_Caq2oP64BQSQwMuP5nfLUf8UQ&oe=63F0B40D"
                    alt=""
                  />
                  <div className="info">
                    <span>sanjay khadka</span>
                    <div className="country">
                      <img
                        src="https://th.bing.com/th/id/R.65d53c06f3be2d216004ee4ebb6405a1?rik=rLr9U5v7UHx41A&pid=ImgRaw&r=0"
                        alt=""
                      />
                      <span>Nepal</span>
                    </div>
                  </div>
                </div>
                <div className="rating">
                  <BsStarFill size={16} color="orange" />
                  <BsStarFill size={16} color="orange" />
                  <BsStarFill size={16} color="orange" />
                  <BsStarFill size={16} color="orange" />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum voluptates doloremque quod sit! Reprehenderit, ab ea
                  assumenda, velit consectetur ullam fugit quasi, quibusdam
                  sapiente commodi nobis magnam. Ipsum, sapiente nostrum.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <AiOutlineLike size={20} />
                  <span>Yes</span>
                  <AiOutlineDislike size={20} />
                  <span>no</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="container">
            <div className="gig-title">
              <h2>1 AI Generated Image</h2>
              <span>$ 5.99</span>
            </div>
            <p>
              I will create a unique high quality AI image based on a
              description that you provide
            </p>
            <div className="delivery-time">
              <div className="time">
                <AiOutlineClockCircle size={20} />
                <span>2 days delivery</span>
              </div>
              <div className="revision">
                <ImLoop2 />
                <span>3 Revisions</span>
              </div>
            </div>
            <div className="additionals">
              <div className="check">
                <BsCheckLg color="#1dbf73" />
                <span>Prompt Writing</span>
              </div>
              <div className="check">
                <BsCheckLg color="#1dbf73" />
                <span>Artwork delivery</span>
              </div>
              <div className="check">
                <BsCheckLg color="#1dbf73" />
                <span>Image Upscaling</span>
              </div>
              <div className="check">
                <BsCheckLg color="#1dbf73" />
                <span>Additional design</span>
              </div>
            </div>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
