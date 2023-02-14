import React from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import "./Messages.scss";
const Messages = () => {
  const currentUser = {
    id: 1,
    username: "sanjay",
    isSeller: true,
  };
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/2" className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                adipisci.
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/2" className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                adipisci.
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/2" className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                adipisci.
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/2" className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                adipisci.
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/2" className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                adipisci.
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
