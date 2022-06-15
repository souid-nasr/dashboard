import {
    ADD_STUDENT ,
    LOAD_STUDENT ,
    FAIL_STUDENT ,
    GET_STUDENT ,
    STUDENT_UPDATE_FAIL,
    STUDENT_UPDATE_REQUEST,
    STUDENT_UPDATE_SUCCESS,
    STUDENT_EDIT_FAIL,
    STUDENT_EDIT_REQUEST,
    STUDENT_EDIT_SUCCESS,
    STUDENT_UPDATE_RESET 
} from '../constants/StudentConstants.js'
const initialState = {
    errors: [],
    student: {},
    data:[],
    loadStudent: false
}
export const studentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case LOAD_STUDENT:
        return { ...state, loadStudent: true };
    case ADD_STUDENT:
        return { ...state, loadStudent: false, student: payload.student };
    case GET_STUDENT:
        return {
        ...state,
        loadStudent: false,
        data: payload.data,
        };
    case FAIL_STUDENT:
            return { ...state, loadStudent: false, errors: payload };
    default:
    return state;
}
};

// EDIT STUDENT
export const studentEditReducer = (
    state = { student: { reviews: [] } },
    action
  ) => {
    switch (action.type) {
      case STUDENT_EDIT_REQUEST:
        return { ...state, loading: true };
      case STUDENT_EDIT_SUCCESS:
        return { loading: false, student: action.payload };
      case STUDENT_EDIT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // UPDATE student
  export const studentUpdateReducer = (state = { student: {} }, action) => {
    switch (action.type) {
      case STUDENT_UPDATE_REQUEST:
        return { loading: true };
      case STUDENT_UPDATE_SUCCESS:
        return { loading: false, success: true, student: action.payload };
      case STUDENT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case STUDENT_UPDATE_RESET:
        return { student: {} };
      default:
        return state;
    }
  };
