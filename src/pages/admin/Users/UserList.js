import { useEffect } from "react";
import { useEndUser } from "../../../context/userContext";
import { getAllUsers } from "../../../services/user.service";

export const UserList = () => {
  const { userState, userDispatch } = useEndUser();
  useEffect(() => {
    getAllUsers(userDispatch);
  }, []);

  console.log(userState.userList)

  return (
    <div>
      {userState.userList.length === 0 ? (
        <h1 className="text-3xl m-5 text-center">No users found</h1>
      ) : (
        <table class="" className="table-auto m-9">
          <thead>
            <tr className="p-6">
              <th className="p-6 text-xl">Name</th>
              <th className="p-6 text-xl">Email</th>
              <th className="p-6 text-xl">Account Number</th>
              <th className="p-6 text-xl">Account Balance</th>
            </tr>
          </thead>
          <tbody>
            {userState.userList.map((item, index) => (
              <tr className="p-6">
                <td className="p-6">{item?.name}</td>
                <td className="p-6">{item?.email}</td>
                <td className="p-6">{item?.accountNo}</td>
                <td className="p-6">Rs {item?.accountBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
