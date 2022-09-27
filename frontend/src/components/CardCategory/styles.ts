import styled, { css } from "styled-components";


export const CardContainer = styled.button`
  position: relative;
  cursor: pointer;
  max-width: 22rem;
  width: 100%;
  height: 6rem;

  background: ${({ theme }) => theme.colors.gray};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px transparent;
  border-radius: 5px;


  display: flex;
  align-items: center;
  flex-direction: row;

  span {
    text-align: center;
    font-weight: 500;
  }

`;

