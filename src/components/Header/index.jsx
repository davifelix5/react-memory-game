import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { ThemeContext } from 'styled-components'

import Button from '../Button'

import {
  Container,
  ButtonContainer,
  Logo,
} from './styles'

export default function Header({onResetClick}) {

  const navigate = useNavigate()

  const {
    mainText,
    contrastBackground,
    contrastText,
    lightBackground,
  } = useContext(ThemeContext)

  function navigateToNewGame() {
    if (!window.confirm('Deseja mesmo acabar esse jogo?')) return 
    navigate('/')
  }

  return (
    <Container>
      <Logo>
        <p>memory</p>
      </Logo>
      <ButtonContainer>
        <Button color={contrastText} bgColor={contrastBackground} onClick={onResetClick}>Restart</Button>
        <Button color={mainText} bgColor={lightBackground} onClick={navigateToNewGame}>New Game</Button>
      </ButtonContainer>
    </Container>
  )
}