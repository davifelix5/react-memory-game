import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1.3rem;
  margin-top: 1rem;
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