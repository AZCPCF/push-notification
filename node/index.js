// index.js
require('./path-request.js'); // Patch request library
const admin = require('firebase-admin');
const serviceAccount = require('./token.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-7bd2c-default-rtdb.firebaseio.com"
});

// Rest of your code


// initialize

const registrationTokens = [
  "fsYDcE575vXH3bWn7n5Au6:APA91bGBIDG4mYwpFNHylJyteqi09HRoqSXO3n8yN033aP4qICV_M-lC5jj8cKBXSTHgSkxC5JIgDSsU2dwY__4pQbsovmNNWDDbkID4HjdreW0ybjOz_BoUGBqp0vJkt-m5sbxTQ3qA",
  "d-5JCXz8wWHEEgEV6WlUoP:APA91bGAyiFePDkhgYgxKWQe7ESfiLf3ku_RpjTa1DsqYg85nQlBg8zCLemTnbSqBf5bUXiLXZ8KPaLL2nTEPLwTk3N8SKO86kC0wRruGCLu_6ci8_EEEOME4WYgD5gRKG7dtci5LrnJ"
];

// user tokens

const message = {
  notification: {
    title: "Hello!",
    body: "This is a test notification for multiple users.",
    // data:{
    //   // its for icon or etc
    // }
  },
  tokens: registrationTokens
};

// message config
  
admin.messaging().sendEachForMulticast(message)
  .then((response) => {
    if (response.failureCount > 0) {
      console.log('Some messages failed to send');
      response.responses.forEach((resp, idx) => {
        if (!resp.success) {
          console.error(`Failure sending to token ${registrationTokens[idx]}:`, resp.error);
        }
      });
    } else {
      console.log('Successfully sent messages:', response);
    }
  })
  .catch((error) => {
    console.error('Error sending message:', error);
  });

// send message