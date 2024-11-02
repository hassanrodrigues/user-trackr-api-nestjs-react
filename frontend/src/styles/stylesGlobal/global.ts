/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

export const ColForm = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width ?? "100%"};
  gap: ${({ gap }) => (gap ? gap : "10px")};
  font-size: 12px;
  @media (max-width: 400px) {
    padding: 20px;
  }
`;
export const RowForm = styled.div<any>`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: ${({ top }) => (top ? top : "16px")};
  justify-content: ${({ justify }) => justify || "normal"};
  align-items: ${({ align }) => (align ? align : "normal")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  column-gap: ${({ colGap }) => (colGap ? colGap : "10px")};
  row-gap: ${({ rowGap }) => (rowGap ? "71px" : "10px")};
`;

export const ItemsModalView = styled.div`
  font-size: 18px;
  color: #707070;
  text-wrap: nowrap;
`;

export const SubItemsModalView = styled.div`
  font-size: 18px;
  color: #050505;
  font-weight: 600;
  width: 100%;
  line-break: anywhere;
`;
