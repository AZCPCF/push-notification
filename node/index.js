var admin = require("firebase-admin");

// Initialize Firebase Admin SDK
var serviceAccount = require("./token.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-7bd2c-default-rtdb.firebaseio.com",
});

// Define the FCM tokens of the recipients
const registrationTokens = [
  "fsYDcE575vXH3bWn7n5Au6:APA91bEuBrxP_NDurQCITP091zo7kZsmxkWnG1vFrr3oQN30MUcER5EJSNMaLzlS5ckJg4ENm-WtS6OtjLTrWz9mHVd5Wx8ih1jQqjO19IY_aS3QsbSzEaxDQl43Oib9xbXJ8Ke4B6Zq",
  "d-5JCXz8wWHEEgEV6WlUoP:APA91bGAyiFePDkhgYgxKWQe7ESfiLf3ku_RpjTa1DsqYg85nQlBg8zCLemTnbSqBf5bUXiLXZ8KPaLL2nTEPLwTk3N8SKO86kC0wRruGCLu_6ci8_EEEOME4WYgD5gRKG7dtci5LrnJ",
];

// Define the notification message
const message = {
  notification: {
    title: "Hello!",
    body: "This is a test notification for multiple users.",
  },
  tokens: registrationTokens,
};

// Send a message to multiple devices corresponding to the provided registration tokens
admin
  .messaging()
  .sendEachForMulticast(message)
  .then((response) => {
    if (response.failureCount > 0) {
      console.log("Some messages failed to send");
      response.responses.forEach((resp, idx) => {
        if (!resp.success) {
          console.error(
            `Failure sending to token ${registrationTokens[idx]}:`,
            resp.error
          );
        }
      });
    } else {
      console.log("Successfully sent messages:", response);
    }
  })
  .catch((error) => {
    console.error("Error sending message:", error);
  });
