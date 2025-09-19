import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './pages';
import './App.css'

const App = () => {
  /* Manage meal state
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: []
  });
  const [mealInput, setMealInput] = useState('');
  const [mealType, setMealType] = useState('');
  */

  return(
    <div>
      <Home />
    </div>
  );
}

export default App;
