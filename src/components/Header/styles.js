import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  align-items: center;
  margin-top: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0;
    align-self: center;
    p {
      font-size: 1.4rem;
    }
  }
`

export const Logo = styled.div`
  color: ${({ theme }) => theme.background};
  font-size: 1.2rem;
  font-weight: bold;
`

export const ButtonContainer = styled.div`
  button:last-child {
    margin-left: 1.1rem;
  }
`