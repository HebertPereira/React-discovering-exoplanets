// eslint-disable-line prefer-template
import styled from 'styled-components';

interface AsidebarProps {
  isOpen: boolean;
}

export const AsidebarContainer = styled.header<AsidebarProps>`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  position: absolute;

  transition: all 0.3s;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;

export const AsidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  min-width: 15rem;
  height: 100%;

  padding: 1rem;

  background-color: #fff;

  > a {
    display: flex;
    align-items: center;
    text-decoration: none;

    color: var(--dark-gray);
    background-color: var(--white);

    padding: 0.5rem;
    margin-bottom: 1rem;

    border-radius: 0.2rem;
    box-shadow: 1px 1px 5px 1px var(--ligth-gray);

    &:hover {
      filter: brightness(0.9);
    }
  }

  > a > svg {
    color: var(--dark-blue);
    margin-right: 0.5rem;
  }
`;

export const AsidebarIconMenu = styled.div`
  margin-bottom: 2rem;
  > svg {
    cursor: pointer;
    fill: var(--dark-blue);
  }
`;

export const AsidebarVoidSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 75%;
  height: 100%;

  background-color: #000;
  opacity: 0.4;
`;
