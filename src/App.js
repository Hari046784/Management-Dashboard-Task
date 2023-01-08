import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';


import CreateMentor from './Components/CreateMentor';
import CreateStudent from './Components/CreateStudent';
import Navbar from './NavBar';
import Dashboard from './Dashboard';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/create-mentor' element={<CreateMentor/>} />
          <Route path='/create-student' element={<CreateStudent/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
