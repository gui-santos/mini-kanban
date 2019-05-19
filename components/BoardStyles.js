import styled from "styled-components";

export const Grid = styled.div`
  height: calc(100% - 37px - 32px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & > div:last-child {
    margin-right: 0;
    padding-right: 0;
    border-right: 0;
  }
`;

export const ColumnContainer = styled.div`
  margin-right: 1rem;
  padding-right: 1rem;
  border-right: 1px solid #dadada;
`;

export const ColumnTitle = styled.h3`
  margin: 0 0 1rem;
  font-size: 0.75rem;
  font-weight: normal;
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
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
