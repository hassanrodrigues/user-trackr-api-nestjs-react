/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div<any>`
  display: flex;
  gap: 10px;
`;

export const CurrentPage = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;

  font-size: 14px;
font-weight: 700;
  color: #ffffff;
  background-color: #D1E7F7;
  border-radius: 5px;
`;

export const Navigator = styled(IconButton)<any>`
  && {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 36px;
    height: 36px;

    opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  }
  svg {
    color: #616c84;
  }
`;

export const TotalPages = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12;
  color: #0b2b25;
`;
