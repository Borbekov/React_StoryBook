const createStory = story => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const id = getState().firebase.auth.uid;
    firestore
      .collection("stories")
      .add({
        ...story,
        firstName: profile.firstName,
        secondName: profile.secondName,
        authorId: id,
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
