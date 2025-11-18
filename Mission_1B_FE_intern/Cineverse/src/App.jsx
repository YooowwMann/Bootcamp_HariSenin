import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthCard from "./components/authcard";
import Homepage from "./pages/Homepage";

function App() {
	return (
      <div className=" bg-black text-white min-h-screen">
        <Login />
        <Register />
        <Homepage />
      </div>
	);
}
export default App;

