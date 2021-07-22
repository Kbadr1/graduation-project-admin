import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./categories.scss";

const Categories = () => {
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

  const deleteCategory = (categoryId) => {
    axios
      .delete(
        `https://boiling-waters-85095.herokuapp.com/api/categories/${categoryId}`
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="Categories container">
      <div className="header row">
        <div className="col-lg-6">
          <h2>Categories: {categories.length}</h2>
        </div>
        <div className="col-lg-6">
          <Link to="/add-category">
            <button type="button" class="btn btn-success float-right">
              Add new Category
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <table>
          <tr>
            <th>Category Name</th>
            <th>Edit Category</th>
            <th>Delete Category</th>
          </tr>
          {categories.map((category) => (
            <tr key={category._id}>
              <td style={{ width: "75%" }}>{category.name}</td>
              <td className="text-center">
                <Link to={`/edit-category/${category._id}`}>
                  <i class="far fa-edit"></i>
                </Link>
              </td>
              <td className="text-center">
                <button onClick={() => deleteCategory(category._id)}>
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

export default Categories;
