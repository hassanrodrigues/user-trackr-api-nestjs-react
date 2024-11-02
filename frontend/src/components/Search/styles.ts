import styled from "styled-components";

export const Container = styled.div<any>`
  width: ${({ size }) => (size ? size : "100%")};
  height: ${({ height }) => height || "56px"};
  display: flex;
  background-color: #ffffff;
  padding: 1rem 0.5rem;
  border-radius: 5px;
  outline: 2px solid rgba(121, 116, 126, 0.5);
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    outline-width: 2px;
  }

  input {
    flex-grow: 1;
    border: none;
    color: black;
    margin-left: 1rem;

    &:focus {
      outline: 0;
    }
  }

  button {
    display: flex;
    border: none;
    background-color: transparent;
  }
`;
