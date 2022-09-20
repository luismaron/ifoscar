import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.875rem;
  margin-bottom: 7rem;

  div {
    position: absolute;
    top: -4rem;
    left: -3rem;
    width: 14rem;
    height: 14rem;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 1000px;

    @media (max-width: 1024px) {
      top: -3rem;
      left: -2rem;
      width: 10rem;
      height: 10rem;
    }

    span {
      display: block;
      margin-left: 1rem;
      margin-top: 1rem;
      font-size: 2.5rem;
      font-family: ${({ theme }) => theme.fonts.oleo};

      @media (max-width: 1024px) {
        font-size: 2rem;
      }
    }
  }
`;

export const Logo = styled.img`
  @media (max-width: 1024px) {
    width: 30rem;
  }

  @media (max-width: 600px) {
    width: 22rem;
  }
`;