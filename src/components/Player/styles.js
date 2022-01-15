import styled from 'styled-components'

export const PlayerContainer = styled.li`
  background: ${({theme}) => theme.lightBackground};
  border-radius: 5px;
  padding: 1rem;
  position: relative;
  
  display: flex;
  justify-content: space-between;

  p {
    font-size: 0.9rem;
  }
  
  &.active {
    color: ${({theme}) => theme.contrastText};
    background: ${({theme}) => theme.contrastBackground};
  }

  & + & {
    margin-left: 0.6rem;
  }
  
  &.active::after {
    content: '';
    position: absolute;
    top: -15px;
    left: 35px;
    width: 15px;
    height: 15px;
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    background-color: ${({theme}) => theme.contrastBackground};
  }
`