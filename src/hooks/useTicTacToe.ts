import React, { useState } from "react";

export const useTickTacToe = () => {
    const [board, setBoard] = useState(Array.from({length: 9}, () => null)
    );
    const [player, setPlayer] = useState<string | null>('X')
    const [gameEnded, setGameEnded] = useState(false);
    const [winner, setWinner] = useState(null);

    const setTurn = () => setPlayer(player === 'X' ? 'O' : 'X')

    const updateBoard = (index: number) => {
        if(board[index] || gameEnded) return;
        const newBoard = [...board];
        newBoard[index] = player;
        setBoard(newBoard);
        checkWinner(newBoard);
        setTurn();
    }
    
    const checkWinner = (board: (string)[]) => {
        // rows check
        for(let i = 0; i< 3; i++) {
            if(board[i] && board[i] === board[i+1] && board[i] === board[i+2]) {
                setWinner(board[i]);
                setGameEnded(true);
            }
        }
    // columns check
    for(let i = 0; i< 3; i++) {
        if(board[i] && board[i] === board[i+3] && board[i] === board[i+6]) {
            setWinner(board[i]);
            setGameEnded(true);
       }
    }
    // diagonal check
    if(board[0] && board[0] === board[4] && board[0] === board[8]) {
        setWinner(board[0]);
        setGameEnded(true);
    }
    if(board[2] && board[2] === board[4] && board[2] === board[6]) {
        setWinner(board[2]);
        setGameEnded(true);
    }
}

    const resetGame = () => {
        setBoard(Array.from({length: 9}, () => null));
        setPlayer('X');
        setGameEnded(false);
        setWinner(null);
    }

    return {
        winner, updateBoard, player, board, gameEnded, resetGame
    }
}