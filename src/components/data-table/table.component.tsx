import { Table } from 'react-bootstrap'
import './data-table.css';
import Pagination from '../pagination/pagination.component';
import UsePagination from '../../hooks/pagination.hook';
import { useAppSelector } from '../../store/store';
import { useMemo } from 'react';
import { useTable, useSortBy, Row, HeaderGroup, Cell } from 'react-table'
import { PropsTypes } from '../../types/props';

const DataTable = (props: PropsTypes.DataTableProps) => {
  const { params, setParams } = props;
  const trips = useAppSelector((state) => state.trips);
  const totalRecords = trips.totalRecords;
  const { currentPage, handlePageChange, totalPages } = UsePagination({ totalRecords, params, setParams });
  const columns: any = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
      },
      {
        Header: 'Origin',
        accessor: 'origin',
      },
      {
        Header: 'Destination',
        accessor: 'destination',
      },
      {
        Header: 'Airline',
        accessor: 'airline',
      },
      {
        Header: 'Date',
        accessor: 'date',
        sortType: (a: Row, b: Row) => {
          const dateA = new Date(a.values.date.split('/').reverse().join('-')).getTime();
          const dateB = new Date(b.values.date.split('/').reverse().join('-')).getTime();

          return dateA - dateB;
        },
      },
      {
        Header: 'Emission Level',
        accessor: 'emission_level',
      },
      {
        Header: 'Emission Level Category',
        accessor: 'emission_level_category',
        hidden: true,
      },
    ],
    []
  )

  const data = useMemo(() => trips.data, [trips.data]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  }: any = useTable(
    {
      columns,
      data: data ?? [],
      initialState: {
        hiddenColumns: ['emission_level_category']
      }
    },
    useSortBy
  )
  const firstPageRows = rows.slice(0, 20)

  return (
    <>
      <Table className='data-table' striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: HeaderGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(
            (row: Row, _i: number) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: Cell) => {
                    if (cell.column.id == 'emission_level') {
                      return <td {...cell.getCellProps()} className={`emission-level ${row.values.emission_level_category}`}>
                        <strong>{cell.render('Cell')}</strong>
                      </td>
                    }
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )
            }
          )}
        </tbody>
      </Table>
      <Pagination
        pages={Array.from({ length: totalPages }, (_value, index) => index + 1)}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  )
}

export default DataTable