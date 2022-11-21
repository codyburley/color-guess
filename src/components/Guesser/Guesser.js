import React, { useState, useEffect } from 'react';
import './Guesser.scss';
import { v4 as uuidv4 } from "uuid";

const Guesser = () => {
  const [colorOption, setColorOption] = useState([]);
  const [correct, setCorrect] = useState('');
  const [answer, setAnswer] = useState('');

  const generateColors = () => {
    const colorArray = []
    for (let i = 0; i < 3; i++) {
      let color = Math.floor(Math.random() * 16777215).toString(16);
      color = "#" + color;
      colorArray.push(color);
    }
    setColorOption(colorArray);
    setCorrect(Math.floor(Math.random() * 3));
  }

  useEffect(() => {
    generateColors();
  }, [])

  const handleClick = (guess) => {
    console.log(guess.col)
    if (guess.col === colorOption[correct]) {
      setAnswer('Correct')
      generateColors();
    } else {
      setAnswer('Incorrect')
    }
  }

  console.log(colorOption);

  return (
    <div className='guesser'>
      <h1 className='guesser__title'>Guess the Color</h1>
      <div className='guesser__color-box' style={{ backgroundColor: colorOption[correct] }}></div>
      <div className='guesser__option-container'></div>
      <div className='guesser__button-container'>
        {colorOption.map(col => {
          return <button className='guesser__button' key={uuidv4()} onClick={() => handleClick({ col })}>{col}</button>
        })}
      </div>
      {answer === '' ? '' : <div className={`guesser__answer${answer === 'Incorrect' ? ' guesser__answer--incorrect' : ' guesser__answer--correct'}`}>{answer}</div>}
    </div>
  )
}

export default Guesser