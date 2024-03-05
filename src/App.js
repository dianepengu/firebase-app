import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Explore from './pages/Explore';
import Login from './pages/Login';

function App() {
  const uname = localStorage.getItem("uname");

  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex w-screen h-screen z-0">
          <Sidebar className="flex-none" />
          <div className='w-full p-10 bg-slate-50'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
