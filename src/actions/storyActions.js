const createStory = story => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call
    dispatch({
      type: "CREATE_STORY",
      payload: story
    });
  };
};

export default createStory;
