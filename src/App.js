import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Protected from './Routers/ProtectRoute';
import View from './Views/View';
import NotFound from './Components/NotFound/NotFound';
import Login from './Views/Login';



function App() {
  const isLoggedIn = JSON.parse(window.localStorage.getItem('isLoggedIn')) || false;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          isLoggedIn ? <Navigate to="/home"  replace/> : <Login />
        }>
        </Route>
        <Route path='/home' element={
          <Protected isLoggedIn={isLoggedIn}>
            <View />
          </Protected>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;
