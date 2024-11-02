/* eslint-disable @typescript-eslint/no-explicit-any */
import Switch from '@mui/material/Switch';
import { styled as styledMui } from '@mui/material/styles';
import styled from 'styled-components';

export const Wrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : '100%')};
  max-height: ${({ height }) => (height ? height : '530px')};
`;
export const WrapperNoData = styled.div<any>`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: ${({ width }) => (width ? width : '100%')};
  height: 100%;
  border-radius: 8px;
  box-shadow: 0px 1px 4px #00000029;
`;

export const TableBox = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 12px;
  margin-top: -9px;
  thead th {
    position: sticky;
    top: 0;
    background-color: #0b2b25;
    z-index: 1;
  }
  thead {
    :first-child {
      border-radius: 4px 0px 0px 4px;
      border-spacing: 0;
    }

    :last-child {
      border-radius: 0px 4px 4px 0px;
    }
  }

  thead {
    background-color: #0b2b25;
    tr th {
      &:first-child {
        padding-left: 1rem;
      }
      &:last-child {
        padding-right: 1rem;
      }
      font-size: 16px;
      color: #ffffff;
      text-align: left;
      padding: 12px 0px;
      font-weight: normal;
      letter-spacing: 0px;

      :first-child {
        border-radius: 4px 0px 0px 4px;
      }

      :last-child {
        border-radius: 0px 4px 4px 0px;
      }
      &.center {
        text-align: center;
      }
    }
  }

  tbody {
    tr {
      box-shadow: 0px 1px 4px #00000029;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      td {
        &:first-child {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
          padding-left: 10px;
        }
        &:last-child {
          padding-right: 1rem;
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }

        overflow-wrap: break-word;

        padding: 9px 0px;

        :last-child {
          max-width: none;
        }
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  .button {
    border-radius: 4px;
    box-shadow: 0px 2px 3px #0000000f;
    display: flex;
    background-color: white;
    border: none;
    color: #021b1a;
    cursor: pointer;
    padding: 5px 10px;
  }
  button {
    border-radius: 4px;
    box-shadow: 0px 2px 3px #0000000f;
    display: flex;
    background-color: white;
    border: none;
    color: #021b1a;
    cursor: pointer;
    padding: 5px 10px;
    &:hover {
      background-color: #17876d;
      & svg {
        color: white;
      }
      & .MuiSvgIcon-root {
        color: white;
      }
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const AntSwitch = styledMui(Switch)(({ theme }: any) => ({
  width: 52,
  height: 26,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 18
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)'
    }
  },
  '& .MuiSwitch-switchBase': {
    left: 6,
    padding: '3px 0px',
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        border: '1px solid #00C857',
        opacity: 1,
        backgroundColor: '#00C857'
      },
      '&  .MuiSwitch-thumb': {
        backgroundColor: '#FFFFFF',
        position: 'relative',
        right: '-10px'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#D9E1E7',
    boxShadow: 'none',
    width: 20,
    height: 20,
    borderRadius: 11,

    transition: theme.transitions.create(['width'], {
      duration: 200
    })
  },
  '& .MuiSwitch-track': {
    borderRadius: 13,
    opacity: 1,
    border: '1px solid #D9E1E7',
    backgroundColor: '#38445500',
    boxSizing: 'border-box'
  }
}));

export const TableFooter = styled.footer<any>`
  width: 100%;
  padding: 26px 10px;
`;

export const Pagination = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const TotalItems = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 36px;
  color: #0b2b25;
  font-size: 14px;
  font-weight: bold;
  h3 {
    color: #0b2b25;
    font-size: 14px;
    font-weight: normal;
  }
`;

export const Empty = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: auto;
  justify-content: center;

  h2 {
    color: #0b2b25;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -0.5px;
  }

  p {
    color: #0b2b25;
    opacity: 0.89;
    text-align: center;
    font-size: 18px;
    padding-left: 15%;
    padding-right: 15%;
    font-weight: 500;
    height: 36px;
  }
`;
