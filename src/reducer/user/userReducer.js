import { ADD_TRANSACTION, GET_TRANSACTION_LIST, GET_USER_LIST } from "./userConstant";

export const userReducer = (state, action) => {
    switch(action.type) {
        case GET_USER_LIST:
            return {
                ...state,
                userList: action.payload
            }
        case GET_TRANSACTION_LIST:
            return {
                ...state,
                transactionList: action.payload
            }
        case ADD_TRANSACTION:
            return {
                ...state,
                transactionList: [...state.transactionList, action.payload]
            }
    }
}