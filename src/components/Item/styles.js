import styled from 'styled-components'

export const PairContainer = styled.li`
  background-color: ${({theme}) => theme.background};
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  
  cursor: pointer;
  
  p {
    font-weight: bold;
    font-size: 1.5rem;
  }

  & > * {
    opacity: 0;
  }  
  &.show {
    background-color:  ${({theme}) => theme.lightBackground};
  }
  &.show > * {
    opacity: 1
  }

  &.active {
    background-color: ${({theme}) => theme.contrastBackground};
    color: ${({theme}) => theme.contrastText};

  }

  @media (min-width: 500px) {
      &:not(.show):hover {
      background-color: ${({theme}) => theme.contrastBackground};
    }
  }

  @media (max-width: 500px) {
    width: 3rem;
    height: 3rem;
  }
  
  transition: all 0.25s;
`