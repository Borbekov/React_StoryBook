const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello, Bekzhan!");
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("not added ", doc));
};

exports.storyCreated = functions.firestore
  .document("stories/{storyId}")
  .onCreate(doc => {
    const story = doc.data();
    const notification = {
      content: "Added a new story",
      user: `${story.firstName} ${story.secondName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the party!",
        user: `${newUser.firstName} ${newUser.secondName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };

      return createNotification(notification);
    });
});
