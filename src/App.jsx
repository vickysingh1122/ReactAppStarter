import React from 'react';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { CssBaseline } from '@mui/material';

export default function App() {
  return (
    <Router>
      <CssBaseline/>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </Router>
  
  )
}

