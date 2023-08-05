import * as types from "./ActionTypes";

const initialState = {
  isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
  isLoading: false,
  isError: false,
  userData: JSON.parse(localStorage.getItem("userData")) || [],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_REGISTER_SUCCESS:
      localStorage.setItem("isAuth", true);
      localStorage.setItem("userData", JSON.stringify(action.payload));
      //console.log("user data:",action.payload);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        userData: action.payload,
      };


    case types.GET_AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,

      };




    default:
      return state;
  }
};

export { reducer };
