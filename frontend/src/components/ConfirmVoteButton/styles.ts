import styled from "styled-components";

export const ConfirmVoteButtonContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  img {
    @media (max-width: 1024px) {
      width: 80%;
    }

    @media (max-width: 600px) {
      width: 70%;
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