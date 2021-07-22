import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import "./editCategory.scss";

const EditCategory = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  let history = useHistory();

  const getCurrentCategory = () => {
    let categoryId = props.match.params.category_id;
    axios
      .get(
        `https://boiling-waters-85095.herokuapp.com/api/categories/${categoryId}`
      )
      .then((res) => {
        setName(res.data.name);
        setImage(res.data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCurrentCategory();
  }, []);

  const categoryData = {
    name: name,
    image: image,
  };

  const updateCategory = (e) => {
    e.preventDefault();
    let categoryId = props.match.params.category_id;
    axios
      .put(
        `https://boiling-waters-85095.herokuapp.com/api/categories/${categoryId}`,
        categoryData
      )
      .then((res) => {
        console.log(res);
        history.push("/categories");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="EditCategory container">
      <h2>Edit Category</h2>
      <form className="form-row" onSubmit={updateCategory}>
        <div class="form-group col-md-6">
          <label for="exampleInputEmail1">Category Name</label>
          <input
            type="text"
            class="form-control"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group col-md-6">
          <label for="exampleInputEmail1">Image</label>
          <input
            type="text"
            class="form-control"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-success">
          Update Category
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
