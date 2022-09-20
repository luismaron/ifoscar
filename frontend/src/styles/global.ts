import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
  };

  body, input, select, textarea, button {
    font-family: "Nunito", sans-serif;
    font-size: "1rem";
    color: ${({ theme }) => theme.colors.white}
  }
`;