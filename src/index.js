<<<<<<< HEAD
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
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout';
>>>>>>> parent of 03c3090 (add react-router-dom and not found page)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
<<<<<<< HEAD
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
=======
    <App />
>>>>>>> parent of 84cd876 (refactor the repo structure)
=======
    <Layout />
>>>>>>> parent of 03c3090 (add react-router-dom and not found page)
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

