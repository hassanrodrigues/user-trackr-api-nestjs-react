import { SvgIcon } from '@mui/material';
import { forwardRef } from 'react';
import PageNavigator from './components/PageNavigator';
import {
  Actions,
  AntSwitch,
  Empty,
  Pagination,
  TableBox,
  TableFooter,
  TotalItems,
  Wrapper,
  WrapperNoData
} from './styles';
import { organizeData } from './utils/organizedData';
import EyeIcon from '../../assets/icons/EyeIcon';
import PenIcon from '../../assets/icons/PenIcon';
import DeleteIcon from '@mui/icons-material/Delete';

interface ITableList extends HTMLTableElement {
  adjustTableHeight?: boolean;
  isAdmin?: boolean;
  onDelete?: (id: string) => void;
}

export const TableList = forwardRef<ITableList, any>(
  (
    {
      id,
      data,
      headers,
      width,
      enableActions,
      onDetail,
      onEdit,
      onSwitch,
      onDelete,
      totalItems,
      disablePagination,
      currentPage,
      setCurrentPage,
      total,
      limitPerPage,
      changeRowPerPage,
      emptyImage,
      emptyMessage,
      instruction,
      isLoading,
      titleMessage,
      messageModule,
      options,
      adjustTableHeight,
      isAdmin
    },
    ref
  ) => {
    const [organizedData, indexedHeader] = organizeData(data, headers);

    const nextPage = () => {
      if (currentPage < total) {
        setCurrentPage((prevPage: any) => prevPage + 1);
      }
    };
    const goBackPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prevPage: any) => prevPage - 1);
      }
    };

    const goToFirstPage = () => setCurrentPage(1);
    const goToLastPage = () => setCurrentPage(total);

    return (
      <>
        {isLoading ? (
          <div
            style={{
              width: '100%',
              height: 'calc(100vh - 320px)'
            }}
          >
            <WrapperNoData>
              <Empty style={{ borderRadius: '10px' }}>
              </Empty>
            </WrapperNoData>
          </div>
        ) : (
          <>
            {data?.length !== 0 && (
              <div
                style={{
                  width: '100%',
                  overflow: 'auto',
                  height: adjustTableHeight
                    ? 'calc(100vh - 375px)'
                    : 'calc(100vh - 320px)'
                }}
              >
                <Wrapper width={width} height={data?.length === 0}>
                  <TableBox ref={ref} id={id}>
                    <thead>
                      <tr>
                        {headers?.map((header: any) => (
                          <th key={header.key}>{header.value}</th>
                        ))}
                        <th style={{ width: '20%' }}>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {organizedData?.map((row: any, i: number) => {
                        return (
                          <tr
                            key={i}
                            style={{
                              backgroundColor:
                                row?.$original.status === false ||
                                  row?.$original.active === false
                                  ? '#CFD2D2'
                                  : '#FFFFFF'
                            }}
                          >
                            {Object.keys(row).map((item) => {
                              if (item === '$original') return null;
                              const { columnWidth, leftBody } = indexedHeader[item];

                              return (
                                <td
                                  key={item}
                                  style={{
                                    paddingLeft: headers.length === 1 ? '1rem' : '',
                                    width: columnWidth ?? '',
                                    textAlign: leftBody ? 'left' : 'center',
                                    color:
                                      row?.$original.status === false ||
                                        row?.$original.active === false
                                        ? '#6f7379'
                                        : '',
                                  }}
                                >
                                  {row[item] || '-'}
                                </td>
                              );
                            })}

                            {enableActions && (
                              <td style={{ position: 'relative' }}>
                                <Actions>
                                  {onDetail && (
                                    <div>
                                      <button
                                        onClick={() => onDetail(row.$original)}
                                        disabled={row.$original.status === false || row.$original.active === false}
                                      >
                                        <EyeIcon />
                                      </button>
                                    </div>
                                  )}
                                  {isAdmin && onEdit && (
                                    <div hidden={row.$original?.isQms}>
                                      <button
                                        onClick={() => onEdit(row.$original)}
                                        disabled={row.$original.status === false || row.$original.active === false}
                                      >
                                        <SvgIcon viewBox="0 0 24 24">
                                          <PenIcon />
                                        </SvgIcon>
                                      </button>
                                    </div>
                                  )}
                                  {isAdmin && onDelete && (
                                    <div>
                                      <button
                                        onClick={() => onDelete(row.$original)}
                                        disabled={row.$original.status === false || row.$original.active === false}
                                      >
                                        <SvgIcon viewBox="0 0 24 24">
                                          <DeleteIcon />
                                        </SvgIcon>
                                      </button>
                                    </div>
                                  )}
                                  {isAdmin && onSwitch && (
                                    <div className="button">
                                      <AntSwitch
                                        onChange={() => onSwitch(row.$original)}
                                        checked={row?.$original.status || row?.$original.active}
                                        inputProps={{
                                          "aria-label": "ant design",
                                        }}
                                      />
                                    </div>
                                  )}
                                </Actions>
                              </td>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </TableBox>
                </Wrapper>
              </div>
            )}
            {data?.length === 0 && (
              <div
                style={{
                  width: '100%',
                  overflow: 'auto',
                  height: 'calc(100vh - 320px)'
                }}
              >
                <WrapperNoData width={width} height={data?.length === 0}>
                  <Empty style={{ borderRadius: '10px' }}>
                    <div hidden={emptyImage}></div>
                    {titleMessage === 'Tarifa' ? (
                      <h2>
                        {emptyMessage
                          ? 'Nenhum Resultado Encontrado'
                          : `Nenhuma ${titleMessage} Cadastrada`}
                      </h2>
                    ) : (
                      <h2>
                        {emptyMessage
                          ? 'Nenhum Resultado Encontrado'
                          : `Nenhum ${titleMessage} Registrado`}
                      </h2>
                    )}
                    {titleMessage === 'Tarifa' ? (
                      <p>
                        {instruction
                          ? 'Não foi possível achar nenhum resultado para sua busca. Tente refazer a pesquisa para encontrar o que busca.'
                          : `Clique em "Cadastrar" na aba “${messageModule}” para começar a cadastrar.`}
                      </p>
                    ) : (
                      <p>
                        {instruction
                          ? 'Não foi possível achar nenhum resultado para sua busca. Tente refazer a pesquisa para encontrar o que busca.'
                          : `Clique em “Cadastrar Usuário” para começar a cadastrar.`}
                      </p>
                    )}
                  </Empty>
                </WrapperNoData>
              </div>
            )}
            {data?.length !== 0 && !disablePagination && (
              <TableFooter>
                <Pagination>
                  <TotalItems>
                    <h3>Total de itens:</h3>
                    {totalItems}
                  </TotalItems>

                  <PageNavigator
                    currentPage={currentPage}
                    goToFirstPage={goToFirstPage}
                    goToLastPage={goToLastPage}
                    goBackPage={goBackPage}
                    nextPage={nextPage}
                    qtdPages={total}
                    limitPerPage={limitPerPage}
                    changeRowPerPage={changeRowPerPage}
                    options={options}
                  />
                </Pagination>
              </TableFooter>
            )}
          </>
        )}
      </>
    );
  }
);

TableList.displayName = 'Table';
export default TableList;