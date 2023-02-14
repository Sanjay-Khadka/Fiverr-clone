import React from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import "./Orders.scss";
const Orders = () => {
  const currentUser = {
    id: 1,
    username: "sanjay",
    isSeller: true,
  };
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/5044316/pexels-photo-5044316.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </td>
            <td>Photo</td>
            <td>12300</td>
            <td>34</td>
            <td>
              <button>
                <FiMail color="white" size={20} />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/5044316/pexels-photo-5044316.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </td>
            <td>Photo</td>
            <td>12300</td>
            <td>34</td>
            <td>
              <button>
                <FiMail color="white" size={20} />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/5044316/pexels-photo-5044316.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </td>
            <td>Photo</td>
            <td>12300</td>
            <td>34</td>
            <td>
              <button>
                <FiMail color="white" size={20} />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/5044316/pexels-photo-5044316.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </td>
            <td>Photo</td>
            <td>12300</td>
            <td>34</td>
            <td>
              <button>
                <FiMail color="white" size={20} />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/5044316/pexels-photo-5044316.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </td>
            <td>Photo</td>
            <td>12300</td>
            <td>34</td>
            <td>
              <button>
                <FiMail color="white" size={20} />
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
