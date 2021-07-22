import axios from "axios";
import React, { useState, useContext } from "react";
import "./addCategory.scss";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const categoryData = {
    name: name,
    image: image,
  };

  const addCategory = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://boiling-waters-85095.herokuapp.com/api/categories`,
        categoryData
      )
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
    <div className="AddCategory container">
      <h2>Add new category</h2>
      <form className="form-row" onSubmit={addCategory}>
        <div class="form-group col-md-4">
          <label for="exampleInputEmail1">Category Name</label>
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
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
