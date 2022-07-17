import { React } from 'react';
import RenderBoard from './components/RenderBoard';
import './main.css';

//TODO:  
//Tests

const App = () => {

  const connect4String = 'Connect 4';

  return (
    <div className='main'>
      <h1 className='header'>{connect4String}</h1>
      <div className='container'>
        <RenderBoard />
      </div>
    </div>
  );
}

export default App;
