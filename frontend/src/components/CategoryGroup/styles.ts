import styled from "styled-components";

export const CategoryGroupContainer = styled.div`
  width: 100%;

  > h1 {
    font-size: 2.25rem;
    font-family: ${({ theme }) => theme.fonts.pacifico};
    color: ${({ theme }) => theme.colors["light-yellow"]};
    font-weight: 400;
    margin-bottom: 1.625rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.75rem 4rem;
  }
`;