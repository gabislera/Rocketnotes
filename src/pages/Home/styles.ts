import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 125px auto 64px;
  grid-template-areas: 'brand header' 'menu search' 'menu content' 'newnote content';
  background-color: ${({ theme }) => theme.gray_800};
`
export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.gray_700};
  background-color: ${({ theme }) => theme.gray_900};

  > h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.purple_400};
  }
`
export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.gray_900};

  padding-top: 4rem;
  text-align: center;

  > li {
    margin-bottom: 1.5rem;
  }
`

export const Search = styled.div`
  grid-area: search;
  padding: 4rem 4rem 0;
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 4rem;
  overflow-y: auto;
`

export const NewNote = styled.button`
  grid-area: newnote;

  background: ${({ theme }) => theme.purple_400};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.5rem;
  }
`
