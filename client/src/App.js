import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import Profile from './components/Profile';

function App() {

  const user = useSelector(selectUser);
  console.log("This is from App.js", user)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else{
        dispatch(logout());
      }
    })
  } ,[dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element = { <HomeScreen /> } />
          <Route path='/login' element = { <Login /> } />
          <Route path='/profile' element = { <Profile /> } /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
