import React from 'react'
import Header from '../../components/Header'

import {
  FormBackdrop,
  FormContainer,
  FieldTitle,
  InputControl,
  RadioInputControl,
  SubmitButton,
  RadioContainer,
} from './styles'

export default function NewGame() {

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const { theme, players, grid } = Object.fromEntries(formData.entries())
  }

  return (
    <>
      <Header />
      <FormBackdrop>
        <FormContainer onSubmit={handleSubmit}>

          <InputControl>
            <FieldTitle>Select Theme</FieldTitle>

            <RadioContainer>
              <RadioInputControl htmlFor="numbers">
                <input type="radio" name="theme" id="numbers" value="numbers" />
                <p>Numbers</p>
              </RadioInputControl>

              <RadioInputControl htmlFor="icons">
                <input type="radio" name="theme" id="icons" value="icons" />
                <p>Icons</p>
              </RadioInputControl>
            </RadioContainer>

          </InputControl>

          <InputControl>
            <FieldTitle>Number of Players</FieldTitle>

            <RadioContainer gridSize={4} htmlFor="1">
              <RadioInputControl>
                <input type="radio" name="players" id="1" value="1" />
                <p>1</p>
              </RadioInputControl>

              <RadioInputControl htmlFor="2">
                <input type="radio" name="players" id="2" value="2" />
                <p>2</p>
              </RadioInputControl>

              <RadioInputControl htmlFor="3">
                <input type="radio" name="players" id="3" value="3" />
                <p>3</p>
              </RadioInputControl>

              <RadioInputControl htmlFor="4">
                <input type="radio" name="players" id="4" value="4" />
                <p>4</p>
              </RadioInputControl>
            </RadioContainer>

          </InputControl>

          <InputControl>
            <FieldTitle>Grid Size</FieldTitle>

            <RadioContainer>
              <RadioInputControl htmlFor="4">
                <input type="radio" name="grid" id="4" value="4" />
                <p>4x4</p>
              </RadioInputControl>

              <RadioInputControl htmlFor="6">
                <input type="radio" name="grid" id="6" value="6" />
                <p>6x6</p>
              </RadioInputControl>
            </RadioContainer>
          </InputControl>

          <SubmitButton>Start Game</SubmitButton>
        </FormContainer>
      </FormBackdrop>
    </>
  )
}