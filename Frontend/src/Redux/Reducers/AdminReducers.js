import {
    ADD_MODERATOR,
    LOAD_MODERATOR,
    FAIL_MODERATOR,
    GET_MODERATOR,
    LOAD_ADMIN,
    LOGIN_ADMIN,
    LOGOUT_USER,
  } from "../constants/AdminConstants";
const initialState = {
    errors: [],
    admin: {},
    data:[],
    loadModerator: false,
    loadAdmin: false
}
  export const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case LOGIN_ADMIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadAdmin: false,
        isAuthAdmin: true,
        email: payload.email,
        id:payload._id
      };
      case LOGOUT_USER:
        localStorage.removeItem("token");
        return {
          ...state,
          admin:{},
          errors: [],
          loadAdmin: false,
          isAuthAdmin: false,
        };
    case LOAD_MODERATOR:
        return { ...state, loadModerator: true };
        case LOAD_ADMIN:
            return { ...state, loadAdmin: true };
    case ADD_MODERATOR:
        return { ...state, loadModerator: false, moderator: payload.moderator };
    case GET_MODERATOR:
        return {
        ...state,
        loadModerator: false,
        data: payload.data,
        };
    case FAIL_MODERATOR:
            return { ...state, loadModerator: false, errors: payload };
    default:
    return state;
}
};