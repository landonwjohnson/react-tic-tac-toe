import React, { useState, useEffect } from "react";
import { calculateWinner } from "../../helper";
import Board from "../Board";
import {
  GameContainer,
  GameFooter,
  GameHeader,
  NextPlayerText,
  ResetButton,
  ScoreContainer,
} from "./styles";

function Game() {
  const defaultHistory = [Array(9).fill(null)];

  const [history, setHistory] = useState(defaultHistory);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const xO = xIsNext ? "X" : "O";
  const [player1Score, setPlayerOneScore] = useState(0);
  const [player2Score, setPlayerTwoScore] = useState(0);
  let winner = calculateWinner(history[stepNumber]);

  useEffect(() => {
    let isSubscribed = true;

    if (winner && isSubscribed) {
      handleWinner(winner);
    }

    return () => (isSubscribed = false);
  }, [winner !== null]);

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    // return if won or occupied
    if (winner || squares[i]) return;

    // select square
    squares[i] = xO;

    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
    handleTie(squares);
  };

  const handleWinner = (player) => {
    let playAgain = false;
    if (player === "X") {
      setPlayerOneScore((prevScore) => prevScore + 1);
      // eslint-disable-next-line no-restricted-globals
      playAgain = confirm(`Player X wins! Would you like to play again?`);
    } else if ((player = "O")) {
      setPlayerTwoScore((prevScore) => prevScore + 1);
      // eslint-disable-next-line no-restricted-globals
      playAgain = confirm(`Player O wins! Would you like to play again?`);
    }

    if (playAgain) {
      handlePlayAgain();
    }
  };

  const handlePlayAgain = () => {
    setStepNumber(0);
    setHistory(defaultHistory);
    setXisNext("X");
  };

  const resetGame = () => {
    handlePlayAgain();
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  };

  const handleTie = (squares) => {
    if (squares.includes(null)) {
    } else {
      // eslint-disable-next-line no-restricted-globals
      let playAgain = confirm("It is a tie! Would you like to play again?");
      if (playAgain) {
        handlePlayAgain();
      }
    }
  };

  return (
    <>
  
      <GameContainer>
        <GameHeader>
          <ScoreContainer>
            <div className="score-wrapper">
              <div className={"score"}> {player1Score}</div>
            </div>
            <label className={"player"}>Player X</label>
          </ScoreContainer>
          <ScoreContainer>
            <div className="score-wrapper">
              <div className={"score"}> {player2Score}</div>
            </div>
            <label className={"player"}>Player O</label>
          </ScoreContainer>
        </GameHeader>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <GameFooter>
          <NextPlayerText>
            {winner ? (
              "Winner: " + winner
            ) : (
              <span>
                {" "}
                <b>{xO}'s </b> turn
              </span>
            )}
          </NextPlayerText>
          <ResetButton onClick={() => resetGame()}> Reset </ResetButton>
        </GameFooter>
      </GameContainer>
    </>
  );
}

export default Game;
