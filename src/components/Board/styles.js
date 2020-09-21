import styled from 'styled-components'


export const BoardContainer = styled.div`
  border: 1rem solid black;
  background: black;
  width: 320px;
  height: 320px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 1rem;
`