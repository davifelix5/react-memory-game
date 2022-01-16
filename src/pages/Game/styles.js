import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const PairsGrid = styled.ul`
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  justify-items: center;
  grid-template-columns: repeat(${({gridSize}) => gridSize}, 1fr);
`

export const PairsContainer = styled.div`
  display: flex;
  justify-content: center;  
`

export const PlayersContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(${({numberOfPlayers}) => numberOfPlayers}, 1fr);
  margin: 1rem 0;
  @media (max-width: 450px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
`