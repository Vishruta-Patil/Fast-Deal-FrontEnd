import axios from "axios";
import { ADD_TRANSACTION, GET_TRANSACTION_LIST, GET_USER_LIST } from "../reducer/user/userConstant";
import { toast } from "react-toastify";

export const getAllUsers = async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/users`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: GET_USER_LIST, payload: response.data.users });
  } catch (err) {
    console.log("Error: ", err?.response);
  }
};


export const getTransactionOfUsers = async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/users/transactions`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    console.log("hello")
    console.log(response)
    dispatch({ type: GET_TRANSACTION_LIST, payload: response.data.transaction });
  } catch (err) {
    console.log("Error: ", err?.response);
  }
};


export const transferAmount = async (transactionFrom, transactionTo, amount, dispatch) => {
  try {
  const data = {
    transactionFrom, 
    transactionTo, 
    amount
  }
  const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/users/transfer`, data, {
    headers: {
      token: localStorage.getItem("token"),
    },
  })
  console.log(response)
  dispatch({ type: ADD_TRANSACTION, payload: response.data.transaction });
  toast.success(`Transfered RS ${amount} successfully`)
} catch (err) {
  console.log("Error: ", err?.response);
}
}
