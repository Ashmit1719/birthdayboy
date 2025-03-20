import React from 'react';
import Confetti from 'react-confetti';
import FloatingHearts from './FloatingHearts';
import TreasureHunt from './TreasureHunt';
import PopQuiz from './PopQuiz';
import './styles.css';

const App = () => {
  return (
    <div>
      <Confetti />
      <FloatingHearts />
      <TreasureHunt />
      <PopQuiz />
    </div>
  );
};

export default App;