import axios from "axios";
import React, { useState, useContext } from "react";
import "./addBrand.scss";
const AddBrand = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const brandData = {
    name: name,
    image: image,
  };

  const addBrand = (e) => {
    e.preventDefault();
    axios
      .post(`https://boiling-waters-85095.herokuapp.com/api/brands`, brandData)
      .then((res) => {
        console.log(res);
        console.log(name);
        console.log(image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="AddBrand container">
      <h2>Add new Brand</h2>
      <form className="form-row" onSubmit={addBrand}>
        <div class="form-group col-md-4">
          <label for="exampleInputEmail1">Brand Name</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="form-group col-md-8">
          <label for="exampleInputEmail1">Image</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit" class="btn btn-success col-md-3">
          Add Brand
        </button>
      </form>
    </div>
  );
};

export default AddBrand;
