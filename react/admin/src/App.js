import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from  "./screens/Login"
import Register from "./screens/Register"
import React from 'react';
import Bus from './screens/Bus'
import Booking from './screens/Bookings'
import Users from './screens/Users1'
import UsersDetails from './screens/UsersDetails'
import PropertiesDetails from './screens/PropertiesDetails'
import AddBus from './screens/AddBus'
import Rating from './screens/Rating'



import { ToastContainer, toast } from 'react-toastify';
import Home from './screens/Home1';
import Users1 from './screens/Users';

function App() {
  return (
  <div className='container'>
    <Routes>
      
    <Route path='/' element={<Login />}/>
    <Route path='/rating' element={<Rating />}/>
      <Route path='login' element={<Login />}/>
      <Route path='register' element={<Register />}/>
      <Route path='home' element={<Home />}/>
      <Route path='login' element={<Login />}/>
      <Route path='Bus' element={<Bus/>}/>
      <Route path='Booking' element={<Booking />}/>
      <Route path='Users' element={<Users1 />}/>
      <Route path='Users-details' element={<UsersDetails />}/>
      <Route path='AddBus' element={<AddBus />}/>
      <Route path='properties-details' element={<PropertiesDetails />}/>  
    


    </Routes>
    <ToastContainer />


  </div>
  );
}

export default App;
