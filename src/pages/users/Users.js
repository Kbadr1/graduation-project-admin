import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import "./users.scss";

const Users = () => {
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

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUser = (userId) => {
    axios
      .delete(`https://boiling-waters-85095.herokuapp.com/api/users/${userId}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Users container">
      <h2>Users: {users.length}</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gendre</th>
          <th>Phone</th>
          <th className="text-center">Delete user</th>
        </tr>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gendre}</td>
            <td>{user.phone}</td>
            <td className="text-center">
              <button onClick={() => deleteUser(user._id)}>
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Users;
