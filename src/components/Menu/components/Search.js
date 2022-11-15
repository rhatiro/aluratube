import React from "react";
import styled from "styled-components"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid ${({ theme }) => theme.borderBase}; */
  max-width: 425px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  
  input {
    text-align: center;
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
    transition: .6s;
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    /* background-color: ${({ theme }) => theme.backgroundLevel2}; */
    background-color: #61dafb;
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

// Home
// Menu
// Search
// Informação sempre desce

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
  // const [valorDaBusca, setValorDaBusca] = React.useState("Teste");
  // console.log("Search", valorDaBusca)
  const valorDaBusca = valorDoFiltro;
  const setValorDaBusca = setValorDoFiltro;

  return (
    <StyledSearch>
      <input type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
      <button>
        🔍
      </button>
    </StyledSearch>
  )
}