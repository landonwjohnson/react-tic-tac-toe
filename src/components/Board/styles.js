import styled from 'styled-components'


export const BoardContainer = styled.div`
  border: 15px solid black;
  background: black;
  width: 320px;
  height: 320px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 15px;
`