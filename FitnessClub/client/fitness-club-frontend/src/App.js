import "./App.css";
import React from "react";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { AddMembership, Home, Login, Registration } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/addMembership" element={<AddMembership/>} />
        </Routes>
      </>
    </div>
  );
}

export default App;
