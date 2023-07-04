import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.gray_900};
  color: ${({ theme }) => theme.gray_300};

  margin-bottom: 0.5rem;
  border-radius: 0.6rem;

  > input {
    height: 3.5rem;
    width: 100%;

    padding: 1rem;
    color: ${({ theme }) => theme.white};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.gray_300};
    }
  }

  > svg {
    margin-left: 1rem;
  }
`
