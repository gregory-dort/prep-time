import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: []
  });

  const [mealInput, setMealInput] = useState('');
  const [mealType, setMealType] = useState('breakfast');

  return(
    <div className="App">
      
    </div>
  );
}

export default App;
