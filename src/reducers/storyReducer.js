const initState = {
  stories: [
    { id: "1", title: "Help me", content: "Help me Help me Help me" },
    { id: "2", title: "Thank you", content: "Thank you Thank you Thank you" },
    { id: "3", title: "My name", content: "My name My name My name" }
  ]
};

const storyReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_STORY":
      console.log("STORY ", action.payload);
  }
  return state;
};

export default storyReducer;
