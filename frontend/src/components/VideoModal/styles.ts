import styled from "styled-components";

export const IconContainer = styled.div`
  border-radius: 1000px;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const VideoContainer = styled.div`
  margin-top: 2rem;
`;