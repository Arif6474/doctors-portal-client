import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import User from "./User";

const Users = () => {
  const { data: users , isLoading , refetch } = useQuery("user", () =>
    fetch("http://localhost:5000/user" ,{
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3 className="text-2xl"> All Users {users.length} </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user , index) => (
              <User key={user._id} user={user} refetch= {refetch} index={index}></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
