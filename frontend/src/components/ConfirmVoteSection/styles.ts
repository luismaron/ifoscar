import styled from "styled-components";

export const ConfirmVoteSectionContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  img {
    @media (max-width: 1024px) {
      width: 80%;
    }

    @media (max-width: 600px) {
      width: 70%;
    }
  }

  input {
    background: ${({ theme }) => theme.colors["gray"]};
    border: 0;
    padding: 1.25rem;
    border-radius: 8px;
    outline: none;
    border: 1px solid transparent;

    font-size: 1.25rem;

    &:focus-within {
      border: 1px solid ${({ theme }) => theme.colors.yellow};
    }
  }

  button {
    cursor: pointer;
    padding: 1rem 3rem;
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 12px;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
      filter: brightness(0.8);
      transition: filter 0.2s;
    }

    span {
      font-weight: 500;
    }
  }
`;