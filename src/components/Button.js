import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: 15px;
  padding: 10px;
  font-weight: bold;
`

export default Button