export const getPiece = (x, y, moves) => {
    const list = moves?.filter((item) => {
      return (item.x === x && item.y === y);
    });

    return list[0];
  }

  export const getWinningMoves = (xPosition, yPosition, xDirections, yDirections, playerTurn, moves) => {
    const winningMoves = [{ x: xPosition, y: yPosition }];

    for (let current = 1; current <= 3; current += 1) {
      const checkX = xPosition + xDirections * current;
      const checkY = yPosition + yDirections * current;

      const checkPiece = getPiece(checkX, checkY, moves);
      if (checkPiece && checkPiece?.player === playerTurn) {
        winningMoves.push({ x: checkX, y: checkY })
      } else {
        break;
      }
    }

    for (let current = -1; current >= -3; current -= 1) {
      const checkX = xPosition + xDirections * current;
      const checkY = yPosition + yDirections * current;

      const checkPiece = getPiece(checkX, checkY, moves);
      if (checkPiece && checkPiece?.player === playerTurn) {
        winningMoves.push({ x: checkX, y: checkY })
      } else {
        break;
      }
    }

    return winningMoves;
  }
