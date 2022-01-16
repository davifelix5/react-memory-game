import styled from 'styled-components'

export const FormBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  top: 0;
  right: 0;
  
  background: rgba(0, 0, 0, .4);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.form`
  background-color: ${({theme}) => theme.lightBackground};
  border-radius: 1rem;
  padding: 1rem;
  min-width: 45vw;
`

export const RadioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${({gridSize}) => gridSize || 2}, 1fr);
`

export const FieldTitle = styled.p`
  color: ${({theme}) => theme.background};
  font-weight: bold;
`

export const InputControl = styled.div`
  margin: 0.5rem 0;
`

export const RadioInputControl = styled.label`
  input {
    display: none;
  }
  & + & {
    margin-left: 1rem;
  }
  cursor: pointer;
  background: #FFF;
  padding: 0.5rem;
  border-radius: 0.6rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  input:checked + p {
    color: ${({theme}) => theme.contrastBackground};
    font-weight: bold;
  }
`

export const SubmitButton = styled.button`
  background-color: ${({theme}) => theme.contrastBackground};
  color: ${({theme}) => theme.contrastText};
  font-weight: bold;
  font-size: 1.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 1rem 0;
`