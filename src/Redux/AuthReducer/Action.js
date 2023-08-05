import * as types from "./ActionTypes.js"
import axios from "axios"

export const getAuthLoading = () => {
  return {
    type: types.GET_AUTH_REQUEST
  }
}

export const getRegisterSuccess = (payload) => {
  return {
    type: types.GET_REGISTER_SUCCESS,
    payload
  }
}
// .................................

// .................isError state

export const getAuthFailure = () => {
  return {
    type: types.GET_AUTH_FAILURE
  }
}



export const submitRegisterForm = (params) => async (dispatch) => {
    dispatch(getAuthLoading());


    try {
      const response = await axios.post(
        `https://codebuddy.review/submit`,
        params,
        {
          headers: {
            'Access-Control-Allow-Origin': '*', // Replace '*' with your allowed origin
            // 'Access-Control-Allow-Methods': 'POST',
            // 'Access-Control-Allow-Headers': 'Content-Type',
          },
        }
      );
      // const response = await axios.post('https://codebuddy.review/submit', {
      //   params: { params },
      // });
      console.log("after api is hit", response);
      dispatch(getRegisterSuccess(response.data));
    } catch (error) {
      dispatch(getAuthFailure());
    }
  };