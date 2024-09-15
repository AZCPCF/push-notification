import logo from "./logo.svg";
import "./App.css";
import { AddNewUserAnonymously } from "./firebase/auth";
import { generateToken, messaging } from "./firebase/firebase";
import { onMessage } from "firebase/messaging";
import { useEffect, useState } from "react";

function App() {
  const [pl,setPl] = useState() 
  AddNewUserAnonymously();
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
