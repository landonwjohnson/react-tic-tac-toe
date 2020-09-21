import React from "react";
import PropTypes from 'prop-types'
import {SquareButton} from './styles'



function Square({value, onClick}) {
  return (
    <SquareButton isX={value === "X"? true : false} onClick={onClick}>
        {value? value: ""}
    </SquareButton>
  )
}


Square.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Square;
