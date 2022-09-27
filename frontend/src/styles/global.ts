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

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    max-width: 40rem;
    width: 100%;
    background: ${({theme}) => theme.colors.background};
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    @media (max-width: 380px) {
      padding: 2rem;
    }
    @media (max-width: 330px) {
      padding: 1rem;
    }
  }
  
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    cursor: pointer;
    color: #000;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
