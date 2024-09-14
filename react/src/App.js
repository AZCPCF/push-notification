import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { generateToken, messaging } from "./firebase/firebase";
import { onMessage } from "firebase/messaging";
// import { AddNewUserAnonymously } from "./firebase/auth";

function App() {
  // AddNewUserAnonymously();
  const [pl, setPl] = useState("");
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      setPl(payload);
      console.log(payload);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{pl}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
