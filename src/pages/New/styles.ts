import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 6.56rem auto;
  grid-template-areas: 'header' 'content';

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    /* outline: red dashed 1px; */
    /* gap: 1rem; */
  }
`
export const Form = styled.form`
  max-width: 34rem;
  margin: 2.375rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2.25rem;

    button {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.gray_100};
    }
  }
`
