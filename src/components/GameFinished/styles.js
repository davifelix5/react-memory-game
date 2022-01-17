import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`

  background: #FFF;
  border-radius: 1rem;

  padding: 1rem;

  min-width: 45vw;
  @media (max-width: 600px) {
    min-width: 70vw
  }
  @media (min-width: 1300px) {
    min-width: 30vw
  }

`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({theme}) => theme.background};
`

export const Message = styled.p`
  font-size: 0.9rem;
  color: #717F8B;
`

export const PlayerRank = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 2rem;
`

export const Player = styled.li`
  border-radius: 1rem;
  color: ${({theme}) => theme.background};
  & + & {
    margin-top: 0.5rem;
  }
  &:first-child {
    background: ${({theme}) => theme.background};
    color: #FFF;
  }

  p {
    font-weight: 500;
    font-size: 0.9rem;
  }
  span {
    font-size: 1.2rem;
    font-weight: bold;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme}) => theme.lightBackground};
  padding: 1rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Button = styled.button`
  width: 48%;
  font-weight: bold;
  border-radius: 0.8rem;
  padding: 0.6rem 0.3rem;
  color: #717F8B;
  &:first-child {
    color: #FFF;
    background: ${({theme}) => theme.contrastBackground};
  }
  
`