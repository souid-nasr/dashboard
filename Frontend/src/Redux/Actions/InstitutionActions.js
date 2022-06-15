import {
    INSTITUTION_CREATE_FAIL,
    INSTITUTION_CREATE_REQUEST,
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
    INSTITUTION_UPDATE_SUCCESS,
    ADD_INSTITUTION ,
    LOAD_INSTITUTION ,
    FAIL_INSTITUTION ,
    GET_INSTITUTION ,
  } from "../constants/InstitutionConstants";
  import axios from "axios";
  
  export const listInstitutions = () => async (dispatch) => {
    try {
      dispatch({ type: INSTITUTION_LIST_REQUEST });
      const { data } = await axios.get(`/api/institutions/all`);
  
      dispatch({ type: INSTITUTION_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: INSTITUTION_LIST_FAIL,
        // payload: message,
      });
    }
  };
  
  // DELETE Institution
  export const deleteInstitution = (id) => async (dispatch) => {
    try {
      dispatch({ type: INSTITUTION_DELETE_REQUEST });
  

  
      await axios.delete(`/api/institutions/${id}`);
  
      dispatch({ type: INSTITUTION_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      }
      dispatch({
        type: INSTITUTION_DELETE_FAIL,
        // payload: message,
      });
    }

  
  // CREATE Institution
  export const createInstitution =
    (name,subject, institutionType, content, countryImage,country,logo) =>
    async (dispatch) => {
      try {
        dispatch({ type: INSTITUTION_CREATE_REQUEST });
        const { data } = await axios.post(
          `http://localhost:8080/api/institutions/add`,
          { name,subject, institutionType, content, countryImage,country,logo},
        );
  
        dispatch({ type: INSTITUTION_CREATE_SUCCESS, payload: data });
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;

        dispatch({
          type: INSTITUTION_CREATE_FAIL,
        //   payload: message,
        });
      }
    };
  
  // EDIT Institution
  export const editInstitution = (id) => async (dispatch) => {
    try {
      dispatch({ type: INSTITUTION_EDIT_REQUEST });
      const { data } = await axios.get(`/api/institutions/${id}`);
      dispatch({ type: INSTITUTION_EDIT_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: INSTITUTION_EDIT_FAIL,
        // payload: message,
      });
    }
  };
  
  // UPDATE Institution
  export const updateInstitution = (institution) => async (dispatch) => {
    try {
      dispatch({ type: INSTITUTION_UPDATE_REQUEST });
      const { data } = await axios.put(
        `/api/institutions/${institution._id}`,
        institution,
      
      );
  
      dispatch({ type: INSTITUTION_UPDATE_SUCCESS, payload: data });
      dispatch({ type: INSTITUTION_EDIT_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: INSTITUTION_UPDATE_FAIL,
        // payload: message,
      });
    }
  };
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  export const allInstitutions = () => async (dispatch) => {
    dispatch({
      type: LOAD_INSTITUTION,
    });
    try {
      let res = await axios.get("http://localhost:8080/api/institutions/all");
      dispatch({
        type: GET_INSTITUTION,
        payload: res.data, 
      });
    } catch  {
      // const { errors } = error.res.data;
      dispatch({
        type: FAIL_INSTITUTION,
        // payload: errors,
      });
    }
  };
  
  //Delete
  export const deleteInstitute= (id) => async (dispatch) => {
    try {
      let res = await axios.delete(`http://localhost:8080/api/institutions/${id}`);
      dispatch(allInstitutions());
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: FAIL_INSTITUTION,
        payload: errors,
      });
    }
  };
  //Edit
  export const editInstitute = (id,updatedInstitution) => async (dispatch) => {
    try {
      let res = await axios.put(`http://localhost:8080/api/institutions/${id}`,updatedInstitution);
      dispatch(allInstitutions());
    } catch (error) {
      // const { errors } = error.response.data;
      dispatch({
        type: FAIL_INSTITUTION,
        // payload: errors,
      });
    }
  };
  
  //add
  export const addInstitution = (newInstitution) => async (dispatch) => {
    dispatch({
      type: LOAD_INSTITUTION,
    });
    try {
      let res = await axios.post("http://localhost:8080/api/institutions/new", newInstitution);
      dispatch({
        type: ADD_INSTITUTION,
        payload: res.data, 
      });
      dispatch(allInstitutions());
    } catch (error) {
      // const { errors } = error.res.data;
      dispatch({
        type: FAIL_INSTITUTION,
        // payload: errors,
      });
    }
  }