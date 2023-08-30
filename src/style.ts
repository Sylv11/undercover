import styled from 'styled-components';
import texture from './assets/textura.png';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${texture});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
`;