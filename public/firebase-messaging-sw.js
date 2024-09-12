importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
const config = {
  apiKey: "AIzaSyC6_sr673FgIjEir5H11nVRnPgWVuzglTs",
  authDomain: "test-7bd2c.firebaseapp.com",
  projectId: "test-7bd2c",
  storageBucket: "test-7bd2c.appspot.com",
  messagingSenderId: "879922186406",
  appId: "1:879922186406:web:ca10cf7713c35219118c67",
  measurementId: "G-9Z44BP7K1Q",
};
firebase.initializeApp(config)
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received backgrounf message ");
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
