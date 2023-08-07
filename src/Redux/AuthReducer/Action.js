import * as types from "./ActionTypes.js";

// Mock data
const mockResponse = {
  message: "Success",
  data: {
    emailId: "john.doe@gmail.com",
    password: "QWerty##11",
    firstName: "John",
    lastName: "Doe",
    address: "22/B, Baker Street, London - 10089",
    countryCode: "+91",
    phoneNumber: "2225550909",
  },
};

// Simulated API request function
const mockSubmitApi = (params) => {
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
export const getAuthLoading = () => {
  return {
    type: types.GET_AUTH_REQUEST,
  };
};

export const getRegisterSuccess = (payload) => {
  return {
    type: types.GET_REGISTER_SUCCESS,
    payload,
  };
};

export const getAuthFailure = () => {
  return {
    type: types.GET_AUTH_FAILURE,
  };
};

export const submitRegisterForm = (params) => async (dispatch) => {
  dispatch(getAuthLoading());

  try {
    // Simulate API call
    const response = await mockSubmitApi(params);

    // Simulate successful response
    dispatch(getRegisterSuccess(response.data));
  } catch (error) {
    // Simulate error response
    dispatch(getAuthFailure());
  }
};
