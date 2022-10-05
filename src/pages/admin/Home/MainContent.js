import { useEffect } from "react";
import { useAdmin } from "../../../context/adminContext";
import { useEndUser } from "../../../context/userContext";
import { getTotalAmountFromBank } from "../../../services/admin.service";
import { getAllUsers } from "../../../services/user.service";

export const MainContent = () => {
    const { userState, userDispatch } = useEndUser();
    const {adminState, adminDispatch} = useAdmin()
  useEffect(() => {
    getAllUsers(userDispatch);
    getTotalAmountFromBank(adminDispatch)
  }, []);

  const totalUsers = userState?.userList?.length

    return (
        <div className="m-7">
      <h2 className="text-3xl mb-3">Total Amount : {adminState.totalBankAmount}</h2>
      <h2 className="text-3xl">Total Users : {totalUsers} </h2>
    </div>
    )
}