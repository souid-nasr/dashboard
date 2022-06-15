
import { LOGOUT_USER, LOGIN_MODERATOR} from "../constants/ModeratorConstants";

const initialState = {
    errors: [],
    moderator: {},
    data:[],
    loadModerator: false,
    loadAdmin: false
}
  export const moderatorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
            case LOGOUT_USER:
                localStorage.removeItem("token");
                return {
                  ...state,
                  moderator: {},
                  errors: [],
                  loadModerator: false,
                  isAuthModerator: false,
                };
    case LOGIN_MODERATOR:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("moderator", payload.moderator);
      return {
        ...state,
        loadModerator: false,
        isAuthModerator: true,
        photo: payload.photo,
        firstName:payload.firstName,
        firstName:payload.lastName,
        email: payload.email,
        id:payload._id,
        moderator:payload.moderator
      };
      // case LOGOUT_USER:
      //   localStorage.removeItem("token");
      //   return {
      //     ...state,
      //     moderator:{},
      //     errors: [],
      //     loadModerator: false,
      //     isAuthModerator: false,
      //   };
    default:
    return state;
}
};