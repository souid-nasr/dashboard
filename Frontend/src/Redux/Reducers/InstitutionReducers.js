import {
    INSTITUTION_CREATE_FAIL,
    INSTITUTION_CREATE_REQUEST,
    INSTITUTION_CREATE_RESET,
    INSTITUTION_CREATE_SUCCESS,
    INSTITUTION_DELETE_FAIL,
    INSTITUTION_DELETE_REQUEST,
    INSTITUTION_DELETE_SUCCESS,
    INSTITUTION_EDIT_FAIL,
    INSTITUTION_EDIT_REQUEST,
    INSTITUTION_EDIT_SUCCESS,
    INSTITUTION_LIST_FAIL,
    INSTITUTION_LIST_REQUEST,
    INSTITUTION_LIST_SUCCESS,
    INSTITUTION_UPDATE_FAIL,
    INSTITUTION_UPDATE_REQUEST,
    INSTITUTION_UPDATE_RESET,
    INSTITUTION_UPDATE_SUCCESS,
    ADD_INSTITUTION,
    LOAD_INSTITUTION,
    FAIL_INSTITUTION,
    GET_INSTITUTION,
  } from "../constants/InstitutionConstants.js";
  
  // ALL institutionS
  export const institutionListReducer = (state = { institutions: [] }, action) => {
    switch (action.type) {
      case INSTITUTION_LIST_REQUEST:
        return { loading: true, institutions: [] };
      case INSTITUTION_LIST_SUCCESS:
        return { loading: false, institutions: action.payload };
      case INSTITUTION_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // DELETE institution
  export const institutionDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case INSTITUTION_DELETE_REQUEST:
        return { loading: true };
      case INSTITUTION_DELETE_SUCCESS:
        return { loading: false, success: true };
      case INSTITUTION_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // Create institution
  export const institutionCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case INSTITUTION_CREATE_REQUEST:
        return { loading: true };
      case INSTITUTION_CREATE_SUCCESS:
        return { loading: false, success: true, institution: action.payload };
      case INSTITUTION_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case INSTITUTION_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  // EDIT institution
  export const institutionEditReducer = (
    state = { institution: { reviews: [] } },
    action
  ) => {
    switch (action.type) {
      case INSTITUTION_EDIT_REQUEST:
        return { ...state, loading: true };
      case INSTITUTION_EDIT_SUCCESS:
        return { loading: false, institution: action.payload };
      case INSTITUTION_EDIT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  // UPDATE institution
  export const institutionUpdateReducer = (state = { institution: {} }, action) => {
    switch (action.type) {
      case INSTITUTION_UPDATE_REQUEST:
        return { loading: true };
      case INSTITUTION_UPDATE_SUCCESS:
        return { loading: false, success: true, institution: action.payload };
      case INSTITUTION_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case INSTITUTION_UPDATE_RESET:
        return { institution: {} };
      default:
        return state;
    }
  };
  //+++++++++++++++++++++++++++++++++++++++++++++

  const initialState = {
    errors: [],
    institution: {},
    data:[],
    loadInstitution: false
}
  export const institutionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case LOAD_INSTITUTION:
        return { ...state, loadInstitution: true };
    case ADD_INSTITUTION:
        return { ...state, loadInstitution: false, institution: payload.institution };
    case GET_INSTITUTION:
        return {
        ...state,
        loadInstitution: false,
        data: payload.data,
        };
    case FAIL_INSTITUTION:
            return { ...state, loadInstitution: false, errors: payload };
    default:
    return state;
}
};