import "./App.css";
import React from "react";
import { useDispatch } from 'react-redux';
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { AddMembership, Home, Login, Registration, Profile, News } from "./pages";
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
          <Route path="/membership/:id/edit" element={<AddMembership/>} />
          <Route path="/addMembership" element={<AddMembership/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/news" element={<News/>} />
        </Routes>
      </>
    </div>
  );
}

export default App;
