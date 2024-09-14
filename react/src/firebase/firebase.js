import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyC6_sr673FgIjEir5H11nVRnPgWVuzglTs",
  authDomain: "test-7bd2c.firebaseapp.com",
  projectId: "test-7bd2c",
  storageBucket: "test-7bd2c.appspot.com",
  messagingSenderId: "879922186406",
  appId: "1:879922186406:web:ca10cf7713c35219118c67",
  measurementId: "G-9Z44BP7K1Q",
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);
  if (permission == "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BM8c2bVS_BMkt7R00N7jhxrCAZFkXFBQny5fXuJkP_MKbpDsu5Ao1krKX5SIKukEZumwGWsopRUKPyG8XNvr-18",
    });
    console.log(token);
  }
};
