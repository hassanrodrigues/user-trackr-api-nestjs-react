

import styled from 'styled-components';

function RowsPerPage() {
  return (
    <Container>
      <h3>Itens por página</h3> 15
    </Container>
  );
}

export default RowsPerPage;

const Container = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
