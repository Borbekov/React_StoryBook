const signIn = logging => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(logging.email, logging.password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUCCESS"
        });
      })
      .catch(error => {
        dispatch({
          type: "LOGIN_ERROR",
          payload: error
        });
      });
  };
};

export default signIn;
