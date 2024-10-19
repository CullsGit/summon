import React from "react";

const GameBoard = () => {
  const renderGrid = (player) => {
    return (
      <div>
        {Array(9)
          .fill(null)
          .map((_, index) => {
            <div key={index} className="grid-slot">
              {/* Add card elements */}
            </div>;
          })}
      </div>
    );
  };

  return (
    <div className="game-board">
      <div className="player-board">
        <h2>Player 1</h2>
        {renderGrid("player1")}
      </div>
      <div className="player-board">
        <h2>Player 2</h2>
        {renderGrid("player2")}
      </div>
    </div>
  );
};

export default GameBoard;
