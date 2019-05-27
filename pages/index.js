import styled from "styled-components";

import Board from "../components/Board";

const Title = styled.h1`
  text-align: center;
  margin: 0 0 2rem;
`;

const Index = () => (
  <>
    <Title>MINI KANBAN BOARD</Title>
    <Board />
  </>
);

export default Index;
