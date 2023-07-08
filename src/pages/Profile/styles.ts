import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 9rem;

    background: ${({ theme }) => theme.gray_900};

    display: flex;
    align-items: center;

    padding: 7.75rem;

    svg {
      color: ${({ theme }) => theme.gray_100};
      font-size: 1.5rem;
    }

    button {
      background: none;
      border: none;
    }
  }
`
export const Form = styled.form`
  max-width: 21rem;
  margin: -5.25rem auto 0;

  > div:nth-child(4) {
    margin-top: 1.5rem;
  }
`

export const Avatar = styled.div`
  position: relative;

  width: 11.625rem;
  height: 11.625rem;
  margin: -6.25rem auto 2rem;

  > img {
    width: 11.625rem;
    height: 11.625rem;
    border-radius: 50%;
  }

  > label {
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.purple_400};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${({ theme }) => theme.gray_800};
    }
  }
`
