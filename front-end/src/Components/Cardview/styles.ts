import styled from 'styled-components';

export const CardViewContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  max-width: 15rem;
  height: 15rem;
  background-color: rebeccapurple;

  border-radius: 0.5rem;
  border: 1px solid #000;
  overflow: hidden;
`;

export const CardViewTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 4rem;
  text-align: center;

  padding: 1rem;
  background-color: white;
`;

export const CardViewimage = styled.div`
  position: absolute;
`;
