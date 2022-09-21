import styled from "styled-components";

export const NextCategoryContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;

  img {
    @media (max-width: 1024px) {
      width: 80%;
    }

    @media (max-width: 600px) {
      width: 70%;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 1rem;
    background: transparent;
    border: 0;
    cursor: pointer;

    h1 {
      font-size: 2.25rem;
      font-family: ${({ theme }) => theme.fonts.pacifico};
      color: ${({ theme }) => theme.colors["light-gray"]};
      font-weight: 400;

      @media (max-width: 600px) {
        font-size: 1.75rem;
      }
    }

    svg {
      margin-top: 0.5rem;
      color: ${({ theme }) => theme.colors["light-gray"]};
    }
  }
`;