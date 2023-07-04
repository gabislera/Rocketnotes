import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  height: 6.5rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.gray_700};

  display: flex;
  justify-content: space-between;

  padding: 0 5rem;
`
export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 1%.5;

    span {
      font-size: 1rem;
      color: ${({ theme }) => theme.gray_100};
    }

    strong {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.white};
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.gray_100};
    font-size: 2.25rem;
  }
`
