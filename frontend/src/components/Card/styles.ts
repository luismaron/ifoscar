import styled, { css } from "styled-components";

interface CardContainerProps {
  isSelected: boolean;
}

export const CardContainer = styled.button<CardContainerProps>`
  position: relative;
  cursor: pointer;
  max-width: 22rem;
  width: 100%;
  height: 6rem;

  background: ${({ theme }) => theme.colors.gray};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px transparent;
  border-radius: 5px;

  ${({ isSelected }) => isSelected && css`
    border: 1px solid ${({ theme }) => theme.colors.green};
  `}

  display: flex;
  align-items: center;
  flex-direction: row;

  span {
    text-align: center;
    font-weight: 500;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors["light-gray"]};
  }
`;

export const SelectedContainer = styled.div` 
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 1000px;
  position: absolute;
  top: -1rem;
  left: -1rem;

  svg {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const Texts = styled.div`
  padding: 0 0.5rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const VideoLink = styled.button`
  cursor: pointer;

  max-width: 6rem;
  width: 100%;
  height: 100%;

  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  background-color: ${({theme}) => theme.colors.yellow};
  padding: 1rem;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 0;
  color: #000;
  font-weight: bold;
`;
