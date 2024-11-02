/* eslint-disable @typescript-eslint/no-explicit-any */

import { Container, CurrentPage, Navigator, TotalPages } from './styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
function PageNavigator({
  currentPage,
  goBackPage,
  nextPage,
  qtdPages,
}: any) {
  return (
    <Container>


      <Navigator disabled={currentPage <= 1} onClick={goBackPage}>
        <FirstPageIcon />
      </Navigator>
      <Navigator disabled={currentPage <= 1} onClick={goBackPage}>
        <ChevronLeftIcon />
      </Navigator>

      <CurrentPage>{currentPage}</CurrentPage>

      <Navigator disabled={currentPage >= qtdPages} onClick={nextPage}>
        <ChevronRightIcon />
      </Navigator>
      <Navigator disabled={currentPage <= 1} onClick={goBackPage}>
        <LastPageIcon />
      </Navigator>

      <TotalPages>de {qtdPages}</TotalPages>
    </Container>
  );
}

export default PageNavigator;
