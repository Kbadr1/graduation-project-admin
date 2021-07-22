import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import "./editProduct.scss";

const EditProduct = (props) => {
  let history = useHistory();

  const [product, setProduct] = useState({});

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

  const getCurrentProduct = () => {
    let productId = props.match.params.product_id;

    axios
      .get(
        `https://boiling-waters-85095.herokuapp.com/api/products/${productId}`
      )
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setName(res.data.name);
        setPrice(res.data.price);
        setDescription(res.data.description);
        setRichDescription(res.data.richDescription);
        setImage(res.data.image);
        setCountInStock(res.data.countInStock);
        setBrand(res.data.brand._id);
        setCategory(res.data.category._id);
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
    getCurrentProduct();
    getAllBrands();
    getAllCategories();
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    let productId = props.match.params.product_id;

    axios
      .put(
        `https://boiling-waters-85095.herokuapp.com/api/products/${productId}`,
        productData
      )
      .then((res) => {
        console.log(res);
        history.push("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="EditProduct container">
      <h2>Edit Product</h2>
      <form className="form-row" onSubmit={updateProduct}>
        <div class="form-group col-md-12">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group col-md-3">
          <label for="exampleInputEmail1">Price</label>
          <input
            type="number"
            class="form-control"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div class="form-group col-md-3">
          <label for="exampleInputEmail1">Count in stock</label>
          <input
            type="number"
            class="form-control"
            required
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          />
        </div>
        <div class="form-group col-md-3">
          <label for="exampleFormControlSelect1">Brand</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            value={brand}
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
            value={category}
            onChange={(e) => setBrand(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div class="form-group col-md-3">
          <label for="exampleInputEmail1">Brand Id</label>
          <input
            type="text"
            class="form-control"
            required
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div> */}
        {/* <div class="form-group col-md-3">
          <label for="exampleInputEmail1">Category Id</label>
          <input
            type="text"
            class="form-control"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div> */}
        <div class="form-group col-md-12">
          <label for="exampleInputEmail1">Description</label>
          <textarea
            rows="2"
            type="text"
            class="form-control"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div class="form-group col-md-12">
          <label for="exampleInputEmail1">Rich Description</label>
          <textarea
            rows="4"
            type="text"
            class="form-control"
            required
            value={richDescription}
            onChange={(e) => setRichDescription(e.target.value)}
          ></textarea>
        </div>
        <div class="form-group col-md-12">
          <label for="exampleInputEmail1">image</label>
          <input
            type="text"
            class="form-control"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-success">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
