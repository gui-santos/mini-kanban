import styled from "styled-components";

export const Grid = styled.div`
  height: calc(100% - 37px - 32px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & > div:last-child {
    border-right: 0;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  border-right: 1px solid #dadada;
`;

export const ColumnTitle = styled.h3`
  margin: 0 0 1rem;
  font-size: 0.75rem;
  font-weight: normal;
  text-transform: uppercase;
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const AddButton = styled.button`
  float: right;
  border: 0;
  padding: 0 0.25rem;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    background-color: #dadada;
  }
`;
