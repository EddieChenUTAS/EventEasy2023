<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
>>>>>>> parent of 84cd876 (refactor the repo structure)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
=======
    <App />
>>>>>>> parent of 84cd876 (refactor the repo structure)
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
