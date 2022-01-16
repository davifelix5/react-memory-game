import React, { useContext } from 'react'

import Header from '../../components/Header'

import {
  Container,
  PairsContainer,
  PairsGrid,
  PlayersContainer,
} from './styles'

import Item from '../../components/Item'
import Player from '../../components/Player'

import useGame from '../../hooks/useGame'

export default function Game() {

  const players = 4
  const initialType = 'numbers'
  const grid = 4;

  const {
    pairs, gridLength, type,
    playersPoints, activePlayerIndex, rightValues, activeItemsIndex,
    onItemClick, resetGame
  } = useGame(initialType, players, grid)
  
  return (
    <Container>
      <Header onResetClick={resetGame} />
      <PairsContainer>
        <PairsGrid gridLength={gridLength}>
        {pairs.map((item, index) => { 
          const active = activeItemsIndex.includes(index)
          const show = active || rightValues.includes(item.value)
          return <Item
            type={type}
            value={item.value} 
            key={item.id} 
            show={show}
            active={active}
            onClick={() => onItemClick(item.id)} 
          />
        })}
        </PairsGrid>
      </PairsContainer>
      <PlayersContainer numberOfPlayers={playersPoints.length}>
        {playersPoints.map((points, index) => {
          const name = `Player ${index + 1}` 
          return <Player 
            key={name}  
            active={activePlayerIndex === index} 
            name={name} 
            points={points} 
          />
        })}
      </PlayersContainer>
    </Container>
  )
}