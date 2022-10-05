import { useEffect } from "react";
import { useEndUser } from "../../../context/userContext";
import { getTransactionOfUsers } from "../../../services/user.service";

export const Transaction = () => {
  const { userState, userDispatch } = useEndUser();
  useEffect(() => {
    getTransactionOfUsers(userDispatch);
  }, []);
  console.log(userState.transactionList);
  return (
    <div>
      {userState.transactionList.length === 0 ? (
        <h1 className="text-3xl m-5 text-center">No Transaction found</h1>
      ) : (
        <table class="" className="table-auto m-9">
          <thead>
            <tr className="p-4">
              <th className="p-4 text-xl">Account Number</th>
              <th className="p-4 text-xl">Amount</th>
              <th className="p-4 text-xl">Transaction From</th>
              <th className="p-4 text-xl">Transaction TO</th>
            </tr>
          </thead>
          <tbody>
            {userState.transactionList.map((item, index) => (
              <tr className="p-4">
                <td className="p-4">{item?.accountNumber}</td>
                <td className="p-4">Rs {item?.amount}</td>
                <td className="p-4">{item?.transactionFrom}</td>
                <td className="p-4">{item?.transactionTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
