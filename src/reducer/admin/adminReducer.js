import { GET_TOTAL_AMOUNT_IN_BANK } from "./adminConstant";

export const adminReducer = (state, action) => {
    switch(action.type) {
       case GET_TOTAL_AMOUNT_IN_BANK:
        return {
            ...state,
            totalBankAmount: action.payload
        }
    }
}