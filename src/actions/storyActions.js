const createStory = story => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call ot database
    const firestore = getFirestore();
    firestore
      .collection("stories")
      .add({
        ...story,
        firstName: "Bekzhan",
        secondName: "Borbekov",
        authorId: 1234,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_STORY",
          payload: story
        });
      })
      .catch(error => {
        dispatch({
          type: "CREATE_STORY_ERROR",
          payload: error
        });
      });
  };
};

export default createStory;
