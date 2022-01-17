import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Backdrop,
  Container,
  TextContainer,
  Message,
  PlayerRank,
  Player,
  ButtonContainer,
  Button,
  Title,
} from './styles'

export default function GameFinished({
  playersPoints,
  resetGame
}) {
  const sortedPoints = playersPoints
    .map((points, index) => ({name: `Player ${index +1}`, points}))
    .sort((a, b) => b.points - a.points)
  
  const navigate = useNavigate()
  
  return (
    <Backdrop>
      <Container>
        <TextContainer>
          
          <Title>{sortedPoints[0].points === sortedPoints[1].points ? 'Draw' : `${sortedPoints[0].name} Wins`}</Title>
          <Message>Game over! Here are the results</Message>
        </TextContainer>
        <PlayerRank>
          {sortedPoints.map(player => (
            <Player key={player.name}><p>{player.name}</p> <span>{player.points} Pairs</span></Player>
          ))}
        </PlayerRank>
        <ButtonContainer>
          <Button onClick={resetGame}>Restart</Button>
          <Button onClick={() => navigate('/')}>Setup New Game</Button>
        </ButtonContainer>
      </Container>
    </Backdrop>
  )
}