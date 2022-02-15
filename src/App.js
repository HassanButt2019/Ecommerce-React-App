
import React from "react";
import { Routes , Route } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import Home from "./pages/home/Home";
import Header from "./components/nav/header"


const App = ()=> {
  return (

    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Signup/>}/>

    </Routes>
     </>



  );
}

export default App;
