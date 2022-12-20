import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Register from './pages/Login/Register';
import LogIn from './pages/Login/Login';
import Profile from './pages/Profile';
import EditProfile from './pages/Login/EditProfile';
import EditImage from './pages/Login/EditImage';
import PrivateRoute from './components/Utils/PrivateRoute'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Container className='pt-5'>
          
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
            <Route path="/profile" element={<PrivateRoute element={<Profile />}/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/edit-profile" element={<PrivateRoute element={<EditProfile />}/>}></Route>
            <Route path="/edit-image" element={<PrivateRoute element={<EditImage />}/>}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
