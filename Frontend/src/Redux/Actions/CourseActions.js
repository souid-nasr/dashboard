import axios from "axios";
import {
  ADD_COURSE ,
  LOAD_COURSE ,
  FAIL_COURSE ,
  GET_COURSE ,
} from "../constants/CourseConstants"

export const addCourse = (newCourse) => async (dispatch) => {
  dispatch({
    type: LOAD_COURSE,
  });
  try {
    let res = await axios.post("http://localhost:8080/api/courses/", newCourse);
    dispatch({
      type: ADD_COURSE,
      payload: res.data, 
    });
    dispatch(allCourses());
  } catch (error) {
    // const { errors } = error.res.data;
    dispatch({
      type: FAIL_COURSE,
      // payload: errors,
    });
  }
}

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  export const allCourses = () => async (dispatch) => {
    dispatch({
      type: LOAD_COURSE,
    });
    try {
      let res = await axios.get("http://localhost:8080/api/courses/");
      dispatch({
        type: GET_COURSE,
        payload: res.data, 
      });
    } catch  {
      // const { errors } = error.res.data;
      dispatch({
        type: FAIL_COURSE,
        // payload: errors,
      });
    }
  };