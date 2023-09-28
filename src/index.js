import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtLCBEZDn_0uHjxqaSfKLKqMnMPdm9sls",
  authDomain: "my-react-blog-2c5f5.firebaseapp.com",
  projectId: "my-react-blog-2c5f5",
  storageBucket: "my-react-blog-2c5f5.appspot.com",
  messagingSenderId: "108494039882",
  appId: "1:108494039882:web:154cb332e3873e95afafb3",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
