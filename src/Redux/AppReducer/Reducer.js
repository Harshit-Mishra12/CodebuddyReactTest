import * as types from "./ActionTypes";

const initialState = {
  Posts: [],
  isLoading: false,
  isError: false,


};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.GET_POSTS_SUCCESS:

      return {
        ...state,
        isLoading: false,
        Posts: action.payload,
      };






    default:
      return state;
  }
};

export { reducer };
