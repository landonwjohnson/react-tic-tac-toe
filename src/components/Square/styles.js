import styled from 'styled-components'

export const SquareButton = styled.button`
    background: white;
    border: none;
    font-size: 5rem;
    cursor: pointer;
    outline: none;
    color: ${props => props.isX? "#B91F2D;": "#264991;"};
    font-family: sans-serif;
`