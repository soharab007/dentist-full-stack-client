import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Admin</th>
            <th>Delate</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, i) => (
            <tr key={user._id}>
              <th>{i}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-primary btn-xs">Make Admin</button>
              </td>
              <td>
                <button className="btn btn-accent btn-xs">Delate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
