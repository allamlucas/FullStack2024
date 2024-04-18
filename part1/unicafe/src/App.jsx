import { useState } from 'react'
import Statistics from './components/Statistics';
import Button from './components/Button';

const App = () => {

  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = good+neutral+bad;
  
  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} nombre="Good"/>
      <Button handleClick={handleNeutralClick} nombre="Neutral"/>
      <Button handleClick={handleBadClick} nombre="Bad"/>
    
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />


      
    </div>
  );
}

export default App;