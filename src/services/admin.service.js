import { GET_TOTAL_AMOUNT_IN_BANK } from "../reducer/admin/adminConstant";
import axios from 'axios'

export const getTotalAmountFromBank = async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/admin/bankAmount`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      console.log(response)
      dispatch({ type: GET_TOTAL_AMOUNT_IN_BANK, payload: response.data.totalAmount[0].amount });
    } catch (err) {
      console.log("Error: ", err?.response);
    }
  };