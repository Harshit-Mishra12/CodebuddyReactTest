import * as types from "./ActionTypes.js";
import { posts } from "../../Assets/dummy.jsx";

// Mock data
const mockResponse = {
  message: "Success",
  data: posts
};

// Simulated API request function
const mockPostsApi = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful response
      resolve(mockResponse);

      // Simulate an error response
      // reject(new Error("API Error"));
    }, 1000); // Simulated delay of 1 second
  });
};

// Action creators


export const getPostsSuccess = (payload) => {
  return {
    type: types.GET_POSTS_SUCCESS,
    payload,
  };
};



export const getPosts = () => async (dispatch) => {


  try {
    // Simulate API call
    const response = await mockPostsApi();

    // Simulate successful response
    dispatch(getPostsSuccess(response.data));
  } catch (error) {
    // Simulate error response

  }
};
