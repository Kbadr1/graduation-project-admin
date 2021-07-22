import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import "./editBrand.scss";

const EditBrand = (props) => {
  let history = useHistory();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const getCurrentBrand = () => {
    let brandId = props.match.params.brand_id;
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/brands/${brandId}`)
      .then((res) => {
        setName(res.data.name);
        setImage(res.data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCurrentBrand();
  }, []);

  const categoryData = {
    name: name,
    image: image,
  };

  const updateBrand = (e) => {
    e.preventDefault();
    let brandId = props.match.params.brand_id;
    axios
      .put(
        `https://boiling-waters-85095.herokuapp.com/api/categories/${brandId}`,
        categoryData
      )
      .then((res) => {
        console.log(res);
        history.push("/brands");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="EditBrand container">
      <h2>Edit Brand</h2>
      <form className="form-row" onSubmit={updateBrand}>
        <div class="form-group col-md-6">
          <label for="exampleInputEmail1">Brand Name</label>
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
          Update Brand
        </button>
      </form>
    </div>
  );
};

export default EditBrand;
