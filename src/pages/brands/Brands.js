import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./brands.scss";

const Brands = () => {
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

  const deleteBrand = (brandId) => {
    axios
      .delete(
        `https://boiling-waters-85095.herokuapp.com/api/brands/${brandId}`
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllBrands();
  }, []);

  return (
    <div className="Brands container">
      <div className="header row">
        <div className="col-lg-6">
          <h2>Brands: {brands.length}</h2>
        </div>
        <div className="col-lg-6">
          <Link to="/add-brand">
            <button type="button" class="btn btn-success float-right">
              Add new Brand
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <table>
          <tr>
            <th>brand Name</th>
            <th>Edit brand</th>
            <th>Delete brand</th>
          </tr>
          {brands.map((brand) => (
            <tr key={brand._id}>
              <td style={{ width: "75%" }}>{brand.name}</td>
              <td className="text-center">
                <Link to={`/edit-brand/${brand._id}`}>
                  <i class="far fa-edit"></i>
                </Link>
              </td>
              <td className="text-center">
                <button onClick={() => deleteBrand(brand._id)}>
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

export default Brands;
