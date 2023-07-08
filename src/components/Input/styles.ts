import styled from 'styled-components'

interface InputProps {
  $isTitle: boolean
}

export const Container = styled.div<InputProps>`
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

    color: ${({ theme }) => theme.white};

    padding: ${({ $isTitle }) => ($isTitle ? '1rem 1rem' : '1rem 3rem')};

    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.gray_800};
    }
  }

  > svg {
    margin-left: 1rem;
    position: absolute;
  }
`
export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.red_300};
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  align-items: end;
`
