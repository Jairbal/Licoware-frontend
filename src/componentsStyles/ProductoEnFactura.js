import styled from "@emotion/styled";

export const Table = styled.table`
  background-color: white;
  color: black;
  font-size: 12px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  border: 1px solid #9F9B9B;
`;

export const Row = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.td`
  border: 1px solid black;
  width: 100%;
  margin: auto;
`;

export const ColumnHead = styled.th`
  width: 100%;
  margin: auto;
`;

export const ColumnFoot = styled.td`
  width: 100%;
  text-align: right;
`;

