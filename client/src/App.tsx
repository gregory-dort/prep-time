import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './pages';
import './App.css'

const App = () => {

  return(
    <div>
      <Home />
    </div>
  );
}

export default App;
