import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Register from "./pages/Login/Register";
import LogIn from "./pages/Login/Login";
import Profile from "./pages/Profile";
import EditProfile from "./pages/Login/EditProfile";
import EditImage from "./pages/Login/EditImage";
import PrivateRoute from "./components/Utils/PrivateRoute";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "./Manager/AuthContext";
import { User } from "./Manager/User";

function App() {

  const [user, setUser] = useState<User|null>(null);

  useEffect(() => {
    axios
    .get(process.env.REACT_APP_API_URL + "/authentification", {
      withCredentials: true,
    })
    .then((user: any) => {
      setUser(user.data);
    }).catch(()=>{
      setUser(null);
    });
  }, []);


  return (
    <>
      <AuthContext.Provider value={{user:user,setUser:(user)=>{setUser(user)}}}>
        <Router>
          <Header></Header>
          <Container className="pt-5">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<LogIn />}></Route>
              <Route
                path="/profile"
                element={
                <PrivateRoute element={<Profile />} redirect="/login" doRedirect={user!=null}/>
              }
              ></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route
                path="/edit-profile"
                element={<PrivateRoute element={<EditProfile />} redirect="/login" doRedirect={user!=null}/>}
              ></Route>
              <Route
                path="/edit-image"
                element={<PrivateRoute element={<EditImage />} redirect="/login" doRedirect={user!=null}/>}
              ></Route>
            </Routes>
          </Container>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
