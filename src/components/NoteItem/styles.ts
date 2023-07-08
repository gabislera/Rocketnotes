import styled from 'styled-components'

interface NoteItemStyleProps {
  $isNew: boolean
}

export const Container = styled.div<NoteItemStyleProps>`
  display: flex;
  align-items: center;
  position: relative;
  /* outline: red dashed 1px; */

  background-color: ${({ theme, $isNew }) =>
    $isNew ? 'transparent' : theme.gray_900};

  color: ${({ theme }) => theme.gray_300};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.gray_300}` : 'none'};

  margin-bottom: 0.5rem;
  border-radius: 10px;
  /* padding-right: 1rem; */

  .button-delete {
    color: ${({ theme }) => theme.red_300};
  }

  .button-add {
    color: ${({ theme }) => theme.green_300};
  }

  > button {
    border: none;
    background: none;
    position: absolute;
    top: 22px;
    right: 15px;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 0.75rem;
    color: ${({ theme }) => theme.white};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.gray_300};
    }
  }
`
