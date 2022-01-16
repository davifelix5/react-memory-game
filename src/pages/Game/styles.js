import styled from 'styled-components'

export const Container = styled.div``

export const PairsGrid = styled.ul`
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  justify-items: center;
  grid-template-columns: repeat(${({gridSize}) => gridSize}, 5rem) ;
`

export const PairsContainer = styled.div`
  display: flex;
  justify-content: center;  
`

export const PlayersContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(${({numberOfPlayers}) => numberOfPlayers}, 1fr);
  margin:1rem 0;
`