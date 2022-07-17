import { React } from 'react';
import '../main.css';

const ResetButton = ({ handleReset }) => {

    const resetButtonString = 'Reset';
  
    return (
      <div>
        <button className='reset-button' onClick={handleReset} title="Reset the game board">{resetButtonString}</button>
      </div>
  
    );
  };

  export default ResetButton;
