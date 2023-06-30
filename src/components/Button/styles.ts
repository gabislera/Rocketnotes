import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.purple_400};
  color: ${({ theme }) => theme.gray_800};

  height: 3.5rem;
  border: 0;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`
