import axios from "axios";
import {
  ADD_STUDENT ,
  LOAD_STUDENT ,
  FAIL_STUDENT ,
  GET_STUDENT ,
} from '../constants/StudentConstants'

//Add
export const addStudent = (newStudent) => async (dispatch) => {
  dispatch({
    type: LOAD_STUDENT,
  });
  try {
    let res = await axios.post("http://localhost:8080/api/students/new", newStudent);
    dispatch({
      type: ADD_STUDENT,
      payload: res.data, 
    });
    dispatch(allStudents());
  } catch (error) {
    dispatch({
      type: FAIL_STUDENT,
    });
  }
};
//Get All
export const allStudents = () => async (dispatch) => {
  dispatch({
    type: LOAD_STUDENT,
  });
  try {
    let res = await axios.get("http://localhost:8080/api/students/all");
    dispatch({
      type: GET_STUDENT,
      payload: res.data, 
    });
  } catch (error) {
    dispatch({
      type: FAIL_STUDENT,
 
    });
  }
};

//Delete
export const deleteStudent= (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`http://localhost:8080/api/students/${id}`);
    dispatch(allStudents());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_STUDENT,
      payload: errors,
    });
  }
};


// // EDIT STUDENT
// export const edit_Student = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: STUDENT_EDIT_REQUEST });
//     const { data } = await axios.get(`http://localhost:8080/api/userstudent/${id}`);
//     dispatch({ type: STUDENT_EDIT_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({
//       type: STUDENT_EDIT_FAIL,
//       payload: message,
//     });
//   }
// };
// //Update

// export const updateStudent = (student) => async (dispatch) => {
//   try {
//     dispatch({ type:STUDENT_UPDATE_REQUEST });

//     const { data } = await axios.put(
//       `http://localhost:8080/api/userstudent/${student._id}`,
//       student,
//     );

//     dispatch({ type:STUDENT_UPDATE_SUCCESS, payload: data });
//     dispatch({ type:STUDENT_EDIT_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({
//       type:STUDENT_UPDATE_FAIL,
//       payload: message,
//     });
//   }
// };

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Edit
export const editStudent = (id,updatedStudent) => async (dispatch) => {
  try {
    let res = await axios.put(`http://localhost:8080/api/students/${id}`,updatedStudent);
    dispatch(allStudents());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_STUDENT,
      payload: errors,
    });
  }
};

