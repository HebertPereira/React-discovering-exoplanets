import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;

  background: linear-gradient(to right, var(--dark-blue), var(--orange));

  padding: 0 1rem;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;

  > svg {
    cursor: pointer;
    fill: white;
  }
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  width: 100%;
  height: 100%;

  > h1 {
    font-size: clamp(2rem, 0.4rem + 1rem, 3rem);
    color: var(--white);
  }
`;
