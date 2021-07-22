import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./products.scss";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/products`)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const deleteProduct = (productId) => {
    axios
      .delete(
        `https://boiling-waters-85095.herokuapp.com/api/products/${productId}`
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Products container">
      <div className="header row">
        <div className="col-lg-6">
          <h2>Products: {products.length}</h2>
        </div>
        <div className="col-lg-6">
          <Link to="/add-product">
            <button type="button" class="btn btn-success float-right">
              Add new product
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <table>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Count in stock</th>
            <th>Brand</th>
            <th>Category</th>

            <th>Edit</th>
            <th>delete</th>
          </tr>
          {products.map((product) => (
            <tr key={product._id}>
              <td style={{ width: "40%" }}>{product.name}</td>
              <td>{product.price} EGP</td>
              <td className="text-center">{product.countInStock}</td>
              <td>{product.brand.name}</td>
              <td>{product.category.name}</td>
              <td className="text-center">
                <Link to={`/edit-product/${product._id}`}>
                  <i class="far fa-edit"></i>
                </Link>
              </td>
              <td className="text-center">
                <button onClick={() => deleteProduct(product._id)}>
                  <i class="far fa-trash-alt "></i>
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Products;
