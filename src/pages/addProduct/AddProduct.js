import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import "./addProduct.scss";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(undefined);
  const [description, setDescription] = useState("");
  const [richDescription, setRichDescription] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(undefined);

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const productData = {
    name: name,
    price: price,
    description: description,
    richDescription: richDescription,
    image: image,
    brand: brand,
    category: category,
    countInStock: countInStock,
  };

  const addProduct = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://boiling-waters-85095.herokuapp.com/api/products`,
        productData
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllCategories = () => {
    axios
      .get("https://boiling-waters-85095.herokuapp.com/api/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllBrands = () => {
    axios
      .get("https://boiling-waters-85095.herokuapp.com/api/brands")
      .then((res) => {
        setBrands(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllBrands();
    getAllCategories();
  }, []);

  return (
    <div className="AddProduct container">
      <h2>Add new Product</h2>
      <form className="form-row" onSubmit={addProduct}>
        <div class="form-group col-md-12">
          <label for="exampleInputEmail1">Product Name</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="form-group col-md-3">
          <label for="exampleInputEmail1">Price</label>
          <input
            type="number"
            class="form-control"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div class="form-group col-md-3">
          <label for="exampleInputEmail1">Count in stock</label>
          <input
            type="number"
            class="form-control"
            onChange={(e) => setCountInStock(e.target.value)}
            required
          />
        </div>
        <div class="form-group col-md-3">
          <label for="exampleFormControlSelect1">Brand</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={(e) => setBrand(e.target.value)}
          >
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="exampleFormControlSelect1">Category</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="exampleInputEmail1">Description</label>
          <textarea
            row="2"
            type="text"
            class="form-control"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div class="form-group col-md-12">
          <label for="exampleInputEmail1">More Description</label>
          <textarea
            row="4"
            type="text"
            class="form-control"
            onChange={(e) => setRichDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div class="form-group col-md-12">
          <label for="exampleInputEmail1">image</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <button type="submit" class="btn btn-success col-md-3">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
