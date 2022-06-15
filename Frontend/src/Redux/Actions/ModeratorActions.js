import {

  LOAD_MODERATOR,
  LOGIN_MODERATOR,
  FAIL_MODERATOR,
  LOGOUT_USER

} from "../constants/ModeratorConstants";
import axios from "axios";

export const loginModerator = (moderator, history) => async(dispatch) => {
  dispatch({
      type: LOAD_MODERATOR
  })
  try {
      let res = await axios.post('http://localhost:8080/api/moderators/login', moderator)
      dispatch({
          type: LOGIN_MODERATOR,
          payload: res.data //{msg, user, student-token}
      })
      history.push('/admin/profile')
  } catch (error) {
      
      dispatch({
          type: FAIL_MODERATOR,
      })
  }
}


export const logoutModerator = () => {
  return {
      type: LOGOUT_USER
  }
}

  // export const loginAdmin = ({admin,history}) => async (dispatch) => {
  //   dispatch({
  //     type: LOAD_ADMIN,
  //   });
  //   try {
  //     let res = await axios.post("http://localhost:8080/api/admin/login", admin);
  //     dispatch({
  //       type: LOGIN_ADMIN,
  //       payload: res.data, //{msg, user, ADMIN-token}
  //     });
  //     history.push("/overview")
  //   } catch (error) {
  
  //     dispatch({
  //       type: ADMIN_FAIL,
  
  //     });
  //   }
  // };