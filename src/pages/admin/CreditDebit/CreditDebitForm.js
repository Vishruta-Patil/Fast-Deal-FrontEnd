import { useState } from "react";
import { HeroBtn } from "../../../components/common/button/HeroBtn";
import { useEndUser } from "../../../context/userContext";
import { transferAmount } from "../../../services/user.service";

export const CreditDebitForm = () => {
  const [accountNo, setAccountNo] = useState("");
  const [amount, setAmount] = useState("");
  const userAccountNo = localStorage.getItem("accountNo");
  const { userState, userDispatch } = useEndUser();

  console.log(userAccountNo)

  return (
    <div className="m-5">
      <div>
        <label>Account Number</label>
        <input
          onChange={(e) => setAccountNo(e.target.value)}
          value={accountNo}
          type="text"
          class="
        px-3
        py-1.5
        text-base
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        m-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          placeholder="Enter Account Number"
        />
      </div>
      <div>
        <label>Amount (in Rs)</label>
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          type="number"
          class="
  px-3
  py-1.5
  text-base
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  m-3
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
          placeholder="Enter Amount"
        />
      </div>

      <HeroBtn
        classnames="mt-5 font-semibold"
        eventHandler={() =>
          transferAmount(userAccountNo, accountNo, amount, userDispatch)
        }
      >
        Transfer
      </HeroBtn>
    </div>
  );
};
