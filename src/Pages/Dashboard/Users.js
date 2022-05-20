import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import User from "./User";

const Users = () => {
  const { isLoading, data: users } = useQuery("user", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3 className="text-2xl"> All Users {users.length} </h3>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Id</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user , index) => (
              <User key={user._id} user={user} index={index}></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
