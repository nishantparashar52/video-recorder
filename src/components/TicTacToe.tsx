import React from "react";
import { useTickTacToe } from "../hooks/useTicTacToe.ts";
import './TickTacToe.css'
export const Tictactoe = () => {

    const { board, updateBoard, winner, resetGame } = useTickTacToe()
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <div className="board">
                {board.map((cell, index) => (
                    <div key={index} className="cell" onClick={() => updateBoard(index)}>{cell}</div>
                ))}
            </div>
            {winner && <h2>Winner is {winner}</h2>}
            <button onClick={resetGame}>Reset Game</button>
        </div>
    )

}