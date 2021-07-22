import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./orders.scss";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const getAllOrders = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/orders`)
      .then((res) => {
        setOrders(res.data);
        console.log(orders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="Orders container">
      <div className="header row">
        <div className="col-lg-6">
          <h2>Orders: {orders.length}</h2>
        </div>
        {/* <div className="col-lg-6">
          <Link to="/add-order">
            <button type="button" class="btn btn-success float-right">
              Add new order
            </button>
          </Link>
        </div> */}
      </div>
      <div className="all-orders row">
        {orders.map((order) => (
          <div className="col-12 order-details row">
            <div className="col-md-4">
              <h6>Order Details</h6>
              <p>
                Order number: <span>#{order._id}</span>
              </p>
              <p>
                Order placed:
                <span>
                  {" "}
                  {moment(new Date(order.dateOrdered).toLocaleString()).format(
                    `DD/MM/YYYY hh:mm A`
                  )}
                </span>
              </p>
              <p>
                Order Status: <span>{order.status}</span>
              </p>
              <hr />
              <p>
                Governrate: <span>{order.country}</span>
              </p>
              <p>
                City: <span>{order.city}</span>
              </p>
              <p>
                Street Name/No: <span>{order.shippingAddress1}</span>
              </p>
              <p>
                Zip/Postal: <span>{order.zip}</span>
              </p>
              <p>
                Phone Number: <span>{order.phone}</span>
              </p>
              <p>
                Shipping Note: <span>{order.shippingAddress2}</span>
              </p>
              <p>
                Estimated delivery time :
                <span>
                  {" "}
                  {moment(new Date(order.dateOrdered))
                    .add(1, `hour`)
                    .format(`DD/MM/YYYY hh:mm A`)}
                </span>
              </p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <h6>User Information</h6>
                  <p>
                    name: <span>{order.user.name}</span>
                  </p>
                  <p>
                    Email: <span>{order.user.email}</span>
                  </p>
                  <p>
                    Phone: <span>{order.user.phone}</span>
                  </p>
                </div>
                <div className="col-md-6">
                  <h6>Bill Details</h6>
                  <div className="row bill">
                    <div className="col-md-4">
                      <p>Subtotal:</p>
                      <p>Delivery Fee:</p>
                      <p>Total:</p>
                    </div>
                    <div className="col-md-8 text-left">
                      <p>
                        <span>{order.totalPrice} EGP</span>
                      </p>
                      <p>
                        <span>15 EGP</span>
                      </p>
                      <p>
                        <span>{order.totalPrice + 15} EGP</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <table>
                    <tr>
                      <th>Item Description</th>
                      <th className="text-center">Qty</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Total</th>
                    </tr>
                    {order.orderItems.map((item) => (
                      <tr>
                        <td style={{ width: "70%" }}>
                          <div className="row">
                            <div className="col-md-2">
                              <img src={item.product.image} alt="" />
                            </div>
                            <div className="col-md-10 d-flex align-items-center">
                              <Link>{item.product.name}</Link>
                            </div>
                          </div>
                        </td>

                        <td className="text-center">{item.quantity}</td>
                        <td className="text-center">
                          {item.product.price} EGP
                        </td>
                        <td className="text-center">
                          {item.quantity * item.product.price} EGP
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
