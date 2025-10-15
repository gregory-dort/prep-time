import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './pages';
import './App.css'
import { SignInForm } from './components';

const App = () => {

  return(
    <div className = "bg-black">
      <Home />
    </div>
  );
}

export default App;
