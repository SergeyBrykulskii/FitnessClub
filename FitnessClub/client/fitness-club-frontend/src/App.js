import "./App.css";
import React from "react";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Registration } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
