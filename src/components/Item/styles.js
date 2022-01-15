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
  
  & > * {
    opacity: 0;
  }  
  &:not(.show):hover {
    background-color: ${({theme}) => theme.contrastBackground};
  }
  &.show {
    background-color:  ${({theme}) => theme.lightBackground};
  }
  &.show > * {
    opacity: 1
  }
  
  transition: all 0.25s;
`