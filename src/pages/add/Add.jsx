import React from "react";
import "./Add.scss";
const Add = () => {
  return (
    <div className="addGig">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label>Title</label>
            <input type="text" placeholder="I will do this for you" />
            <label>Category</label>
            <select>
              <option value="Design">Design</option>
              <option value="Web Develop">Web development</option>
              <option value="Animation">Animation</option>
              <option value="Music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Briefly introduce to your clients "
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label>Service Title</label>
            <input type="text" placeholder="e.g One page website" />
            <label htmlFor="">Short Description</label>
            <textarea
              type="text"
              placeholder="Short description of your service"
            ></textarea>
            <label htmlFor="">Delivery Time</label>
            <input type="number" min={1} />
            <label htmlFor="">Revision Numbers</label>
            <input type="number" min={1} />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g page design" />
            <input type="text" placeholder="e.g file upload" />
            <input type="text" placeholder="e.g setting up a domain" />
            <input type="text" placeholder="e.g hosting" />
            <label htmlFor="">Price</label>
            <input type=" number" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
