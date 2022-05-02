import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  overflow: auto;
`;
export const HomeContent = styled.div`
  display: grid;
  width: 100%;
  max-width: 100vw;
  height: 100%;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;

  padding: 2rem;

  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 2000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`;
