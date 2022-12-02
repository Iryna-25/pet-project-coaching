// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { HashRouter, Routes, Route } from "react-router-dom";
// import About from "./About";
// import SignUpPage from "./Pages/SignUpPage";
// import LoginPage from "./Pages/LoginPage";


// ReactDOM.render(
// <React.StrictMode>
// <HashRouter>
// <Routes>
// <Route path="/" element={<App/>} />
// <Route path="/about" element={<About/>}/>
// <Route path="/signup" element={<SignUpPage/>}/>
// <Route path="/login" element={<LoginPage/>}/>
// {/* <Route path="/verify" element={</>} /> */}
// </Routes>
// </HashRouter>
// </React.StrictMode>,
// document.getElementById("root")
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root=ReactDOM.createRoot( document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);