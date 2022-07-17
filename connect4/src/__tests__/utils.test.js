import { getPiece, getWinningMoves } from '../utils';

describe('When calling the getPiece function', () => {
    it('should return latest move', () => {
        // Arrange
        const row = 0;
        const column = 2;
        const moves = [{ x: row, y: column, player: 'red' }, { x: 1, y: 3, player: 'yellow' }, { x: 4, y: 3, player: 'red' }];

        // Act
        const result = getPiece(row, column, moves);

        // Assert
        expect(result).toBe(moves[0]);

    });
})

describe('When calling the getWinningMoves function', () => {
    it('should return winning moves', () => {
        // Arrange
        const playerTurn = 'yellow';
        const moves = [{ x: 0, y: 5, player: 'red' }, { x: 1, y: 5, player: 'red' }, { x: 2, y: 5, player: 'red' }, { x: 3, y: 5, player: 'red' }];
        const row = 0;
        const column = 5;
        const directionX = 1;
        const directionY = 0;

        const expectedResult = [{ "x": 0, "y": 5 }];

        // Act
        const result = getWinningMoves(row, column, directionX, directionY, playerTurn, moves);
        console.log(result);
        
        // Assert
        expect(result).toEqual(expectedResult);

    });
})
