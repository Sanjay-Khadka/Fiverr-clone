import React from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import "./Mygigs.scss";
const Mygigs = () => {
  return (
    <div className="mygigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add" className="add-btn link">
            Add New Gig
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
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
              <FiTrash2 color="red" size={25} />
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
              <FiTrash2 color="red" size={25} />
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
              <FiTrash2 color="red" size={25} />
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
              <FiTrash2 color="red" size={25} />
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
              <FiTrash2 color="red" size={25} />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Mygigs;
