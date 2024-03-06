import React from 'react';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Home from './component/Pages/Home';
import Overview from './component/Overview/Overview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import SidebarBox from './component/Sidebar/Sidebar';
import Header from './component/Header/Header';


export default function App() {
  return (
    <Router>
      <CssBaseline />
      <SidebarBox />
      <Header />
      <Routes>
        <Route exact path='/' element={<Overview />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>

  )
}

