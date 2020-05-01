import userTypes from "./user.types";

const INITIAL_STATE = {
  name: "Martin",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.UPDATE_NAME:
      return {
        name: action.payload,
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
