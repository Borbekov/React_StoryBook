const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login Failed!"
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("SIGN OUT");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("SIGNUP_SUCCESS");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("SIGNUP_ERROR ", action.payload.message);
      return {
        ...state,
        authError: action.payload.message
      };
    default:
      return state;
  }
};

export default authReducer;
