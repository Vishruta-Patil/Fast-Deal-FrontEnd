import { GET_LOGIN_STATUS, GET_TOKEN, GET_USER_TYPE } from "./authConstant";

export const authReducer = (state, action) => {
    switch(action.type) {
        case GET_USER_TYPE:
            return {
                ...state,
                userType: action.payload
            }
        case GET_LOGIN_STATUS:
            return {
                ...state,
                loginStatus: !state.loginStatus
            }
        case GET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
    }
}