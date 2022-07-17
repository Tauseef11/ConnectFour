import { React, useState } from 'react';
import ResetButton from './ResetButton';
import { getWinningMoves, getPiece } from '../utils';
import CurrentPlayer from './CurrentPlayer';
import '../main.css';

const RenderBoard = () => {
  const [rows, setRows] = useState(6);
  const [columns, setColumns] = useState(7);
  const [moves, setMoves] = useState([]);
  const [playerTurn, setPlayerTurn] = useState('red');
  const [winner, setWinner] = useState(null);

  const rowViews = [];

  const checkWin = (x, y, player) => {

    console.log('checkWin called', x, y, player);

    const directions = [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 1 }, { x: 1, y: 1 }];
    for (let pos = 0; pos < directions.length; pos++) {
      const element = directions[pos];
      const winningMoves = getWinningMoves(x, y, element.x, element.y, playerTurn, moves);
      if (winningMoves.length > 3) {
        setWinner(playerTurn, winningMoves);
      }
    }
  }

  const takeTurn = (x, y) => {

    console.log('takeTurn called', x, y);

    const nextPlayerTurn = playerTurn === 'red' ? 'yellow' : 'red';
    let currentPosition = null;
    for (let position = rows - 1; position >= 0; position--) {
      if (!getPiece(x, position, moves)) {
        currentPosition = position;
        break;
      }
    }
    if (currentPosition !== null) {
      setMoves(moves.concat({ x: x, y: currentPosition, player: playerTurn }));
      setPlayerTurn(nextPlayerTurn);
      checkWin(x, currentPosition, playerTurn);
    }
  }

  for (let row = 0; row < rows; row += 1) {
    const column = [];
    for (let col = 0; col < columns; col += 1) {
      const piece = getPiece(col, row, moves);
      column.push(
        <div onClick={() => { takeTurn(col, row) }} className='main-board'>
          <div key="col" className='board'>
            {piece ? <div className='piece' style={{ backgroundColor: piece.player }} /> : undefined}
          </div>
        </div>
      );
    }
    rowViews.push(
      <div className='row'>{column}</div>
    )
  }

  const handleReset = () => {
    setMoves([]);
    setWinner(null);
  }

  return (
    <div>
      <div className='winner-message-primary' >
        {winner && <div className='winner-message-secondary'>{`${winner.toUpperCase()} WINS!`}</div>}
        {rowViews}
      </div>
      <CurrentPlayer currentPlayer={playerTurn} />
      <div className='winner-message-tertiary'>
        <ResetButton handleReset={handleReset} />
      </div>
    </div>
  );
};

export default RenderBoard;
