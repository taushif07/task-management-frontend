import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "../pages/Home"
import Tasks from '../pages/Tasks';
import Admin from '../pages/Admin';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
// import Protected from './privateRoute';
import PrivateRoute from './privateRoute';
import AdminLogin from '../Auth/AdminLogin';
import EditTask from '../pages/EditTask';
import AdminEdit from '../pages/AdminEdit';
import AdminPrivateRoute from './adminPrivateRoute';

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
        <Route path="/admin" element={<AdminPrivateRoute><Admin /></AdminPrivateRoute>} />
        <Route path="/admin/:id" element={<PrivateRoute><AdminEdit /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><EditTask /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
    </Routes>
  
    // <Routes>
    //   <PrivateRoute exact path="/" component={Home} />
    //   <Route path="/login" component={Login} />
    // </Routes>
    // <Routes>
    //   <PrivateRoute exact path="/tasks" component={Tasks} />
    //   <Route path="/login" component={Login} />
    // </Routes>
    // <Routes>
    //   <PrivateRoute exact path="/admin" component={Admin} />
    //   <Route path="/login" component={Login} />
    // </Routes>
    // <Routes>
    //   <Route path="/login" component={Login} />
    // </Routes>
    // <Routes>
    //   <Route path="/signup" component={Signup} />
    // </Routes>
  )
}

export default AllRoutes