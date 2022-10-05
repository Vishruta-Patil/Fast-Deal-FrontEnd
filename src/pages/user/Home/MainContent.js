import { useEffect } from "react";
import { useEndUser } from "../../../context/userContext";
import { getAllUsers } from "../../../services/user.service";

export const MainContent = () => {
  const accountNo = localStorage.getItem("accountNo");
  const { userState, userDispatch } = useEndUser();
  useEffect(() => {
    getAllUsers(userDispatch);
  }, []);

  const userData = userState.userList.find(user => user.accountNo === accountNo)

  console.log(userData)

  return (
    <div className="m-7">
      <h2 className="text-4xl mb-3">Account Balance : {userData?.accountBalance}</h2>
      <h2 className="text-4xl">Account Number : {userData?.accountNo}</h2>
    </div>
  );
};
