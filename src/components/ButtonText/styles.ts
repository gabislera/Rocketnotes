import styled from 'styled-components'

interface ButtonTextProps {
  $isActive: boolean
}

export const Container = styled.button<ButtonTextProps>`
  background: none;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.purple_400 : theme.gray_100};

  border: none;
  font-size: 1rem;
`
