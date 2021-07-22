import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/products/`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [users, setUsers] = useState([]);
  const getAllUsers = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [categories, setCategories] = useState([]);
  const getAllCategories = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [brands, setBrands] = useState([]);
  const getAllBrands = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/brands`)
      .then((res) => {
        setBrands(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [orders, setOrders] = useState([]);
  const getAllOrders = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/orders`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
    getAllUsers();
    getAllCategories();
    getAllBrands();
    getAllOrders();
  }, []);

  return (
    <div className="Home container">
      <div className="row">
        <div className=" col-lg-4">
          <div className="feature feature-one">
            <h4>Manage Products</h4>
            <h6>Total Products: {products.length}</h6>
            <Link to="/products">
              <button type="button" class="btn btn-success">
                More Info <i class="fas fa-plus-circle"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="feature feature-two">
            <h4>Manage Users</h4>
            <h6>Total Users: {users.length}</h6>
            <Link to="/users">
              <button type="button" class="btn btn-danger">
                More Info <i class="fas fa-plus-circle"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className=" col-lg-4">
          <div className="feature feature-three">
            <h4>Manage Categories</h4>
            <h6>Total Categories: {categories.length}</h6>
            <Link to="/categories">
              <button type="button" class="btn btn-primary">
                More Info <i class="fas fa-plus-circle"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className=" col-lg-4">
          <div className="feature feature-four">
            <h4>Manage Brands</h4>
            <h6>Total Brands: {brands.length}</h6>
            <Link to="/brands">
              <button type="button" class="btn btn-success">
                More Info <i class="fas fa-plus-circle"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className=" col-lg-4">
          <div className="feature feature-five">
            <h4>Manage Orders</h4>
            <h6>Total Orders: {orders.length}</h6>
            <Link to="/orders">
              <button type="button" class="btn btn-success">
                More Info <i class="fas fa-plus-circle"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
