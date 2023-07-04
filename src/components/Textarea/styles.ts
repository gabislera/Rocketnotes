import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 9.375rem;

  background-color: ${({ theme }) => theme.gray_900};
  color: ${({ theme }) => theme.white};

  border: none;
  resize: none;

  margin-bottom: 0.5rem;
  border-radius: 10px;
  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.gray_300};
  }
`
