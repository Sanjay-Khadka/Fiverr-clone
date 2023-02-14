import React from "react";
import { Link } from "react-router-dom";

import "./Message.scss";
const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <div className="breadcrumbs">
          <span>
            <Link to="/messages" className="link">
              messages
            </Link>
            /john doe
          </span>
        </div>
        <div className="messages-container">
          <div className="text">
            <img
              src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfDJWy2OMUndZ8tYFzXgkiUUwcUr9wcVi-9CYNMfiwFPng&oe=63F0B40D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              repellat, nulla officia beatae rem, harum provident totam facere
              porro illo adipisci aliquid voluptas odio neque saepe sapiente
              consectetur dignissimos maiores.
            </p>
          </div>
          <div className="text owner">
            <img
              src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfDJWy2OMUndZ8tYFzXgkiUUwcUr9wcVi-9CYNMfiwFPng&oe=63F0B40D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              repellat, nulla officia beatae rem, harum provident totam facere
              porro illo adipisci aliquid voluptas odio neque saepe sapiente
              consectetur dignissimos maiores.
            </p>
          </div>
          <div className="text">
            <img
              src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfDJWy2OMUndZ8tYFzXgkiUUwcUr9wcVi-9CYNMfiwFPng&oe=63F0B40D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              repellat, nulla officia beatae rem, harum provident totam facere
              porro illo adipisci aliquid voluptas odio neque saepe sapiente
              consectetur dignissimos maiores.
            </p>
          </div>
          <div className="text owner">
            <img
              src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfDJWy2OMUndZ8tYFzXgkiUUwcUr9wcVi-9CYNMfiwFPng&oe=63F0B40D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              repellat, nulla officia beatae rem, harum provident totam facere
              porro illo adipisci aliquid voluptas odio neque saepe sapiente
              consectetur dignissimos maiores.
            </p>
          </div>
          <div className="text">
            <img
              src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfDJWy2OMUndZ8tYFzXgkiUUwcUr9wcVi-9CYNMfiwFPng&oe=63F0B40D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              repellat, nulla officia beatae rem, harum provident totam facere
              porro illo adipisci aliquid voluptas odio neque saepe sapiente
              consectetur dignissimos maiores.
            </p>
          </div>
          <div className="text owner">
            <img
              src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/326571158_1598544663977484_7422638444480599588_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uwamzeGTxFQAX_ZDE3z&_nc_ht=scontent.fktm6-1.fna&oh=00_AfDJWy2OMUndZ8tYFzXgkiUUwcUr9wcVi-9CYNMfiwFPng&oe=63F0B40D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              repellat, nulla officia beatae rem, harum provident totam facere
              porro illo adipisci aliquid voluptas odio neque saepe sapiente
              consectetur dignissimos maiores.
            </p>
          </div>
        </div>
        <hr />
        <div className="send-message">
          <textarea type="textbox" placeholder="Write a message"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
