import React, { useContext } from 'react'

import { ThemeContext } from 'styled-components'

import Button from '../Button'

import {
  Container,
  ButtonContainer,
  Logo,
} from './styles'

export default function Header() {

  const {
    mainText,
    contrastBackground,
    contrastText,
    lightBackground,
  } = useContext(ThemeContext)

  return (
    <Container>
      <Logo>
        <p>memory</p>
      </Logo>
      <ButtonContainer>
        <Button color={contrastText} bgColor={contrastBackground}>Restart</Button>
        <Button color={mainText} bgColor={lightBackground}>New Game</Button>
      </ButtonContainer>
    </Container>
  )
}