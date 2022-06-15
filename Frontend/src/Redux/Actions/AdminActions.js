import {
    ADD_MODERATOR,
    LOAD_MODERATOR,
    FAIL_MODERATOR,
    GET_MODERATOR,
    LOAD_ADMIN,
    LOGIN_ADMIN,
    ADMIN_FAIL,
    LOGOUT_USER

  } from "../constants/AdminConstants";
  import axios from "axios";
  
  export const allModerators = () => async (dispatch) => {
    dispatch({
      type: LOAD_MODERATOR,
    });
    try {
      let res = await axios.get("http://localhost:8080/api/admin/");
      dispatch({
        type: GET_MODERATOR,
        payload: res.data, 
      });
    } catch  {
      // const { errors } = error.res.data;
      dispatch({
        type: FAIL_MODERATOR,
        // payload: errors,
      });
    }
  };
  
  //Delete
  export const deleteModerator= (id) => async (dispatch) => {
    try {
      let res = await axios.delete(`http://localhost:8080/api/admin/${id}`);
      dispatch(allModerators());
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: FAIL_MODERATOR,
        payload: errors,
      });
    }
  };
  //Edit
  export const editModerator = (id,updatedModerator) => async (dispatch) => {
    try {
      let res = await axios.put(`http://localhost:8080/api/admin/${id}`,updatedModerator);
      dispatch(allModerators());
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: FAIL_MODERATOR,
        payload: errors,
      });
    }
  };
  
  //add
  export const addModerator = (newModerator) => async (dispatch) => {
    dispatch({
      type: LOAD_MODERATOR,
    });
    try {
      let res = await axios.post("http://localhost:8080/api/admin/registermoderator", newModerator);
      dispatch({
        type: ADD_MODERATOR,
        payload: res.data, 
      });
      dispatch(allModerators());
    } catch (error) {
      // const { errors } = error.res.data;
      dispatch({
        type: FAIL_MODERATOR,
        // payload: errors,
      });
    }
  }
  export const loginAdmin = (admin, history) => async(dispatch) => {
    dispatch({
        type: LOAD_ADMIN
    })
    try {
        let res = await axios.post('http://localhost:8080/api/admin/login', admin)
        dispatch({
            type: LOGIN_ADMIN,
            payload: res.data //{msg, user, student-token}
        })
        history.push('/admin/profile')
    } catch (error) {
        
        dispatch({
            type: ADMIN_FAIL,
        })
    }
}

export const logoutAdmin = () => {
  return {
      type: LOGOUT_USER
  }
}