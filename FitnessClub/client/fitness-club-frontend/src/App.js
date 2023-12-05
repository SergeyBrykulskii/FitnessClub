import "./App.css";
import React from "react";
import { useDispatch } from 'react-redux';
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { AddMembership, Home, Login, Registration, Profile } from "./pages";
import { fetchAuthMe } from "./redux/slices/auth"

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div className="App">
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/addMembership" element={<AddMembership/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </>
    </div>
  );
}

export default App;
