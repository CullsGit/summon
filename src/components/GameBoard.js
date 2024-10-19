import React from "react";
import "./GameBoard.css";

const GameBoard = () => {
  // Create a 6x3 grid for the combined board
  const renderCombinedGrid = () => {
    return (
      <div className="combined-grid">
        {Array(18)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={`grid-slot ${
                index < 9 ? "player1-slot" : "player2-slot"
              }`}
            >
              {/* Add card elements here later */}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="game-board">
      <h1>Battle Arena</h1>
      {renderCombinedGrid()}
    </div>
  );
};

export default GameBoard;
