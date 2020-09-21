import React from "react";
import PropTypes from "prop-types";
import Square from "../Square";
import { BoardContainer } from "./styles";

const Board = ({ squares, onClick }) => (
  <BoardContainer>
    {squares
      ? squares.map((square, index) => (
          <Square key={index} onClick={() => onClick(index)} value={square} />
        ))
      : null}
  </BoardContainer>
);

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
};

export default Board;
