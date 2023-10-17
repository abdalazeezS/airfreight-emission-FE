import { Table } from 'react-bootstrap'
import './data-table.css';
import { SetURLSearchParams } from 'react-router-dom';
import Pagination from '../pagination/pagination.component';
import UsePagination from '../../hooks/pagination.hook';
import { useAppSelector } from '../../store/store';
import { useMemo } from 'react';
import { useTable, useSortBy, Row, HeaderGroup, Cell } from 'react-table'

interface IDataTableProps {
  params: URLSearchParams
  setParams: SetURLSearchParams
}

const DataTable = (props: IDataTableProps) => {
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
        Header: 'Emission Level C',
        accessor: 'emission_level_category',
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
    },
    useSortBy
  )
  const firstPageRows = rows.slice(0, 20)

  return (
    <>
      {/* <Table className='data-table' striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Airline</th>
            <th>Date</th>
            <th>Emission Level</th>
          </tr>
        </thead>
        <tbody>
          {trips?.data?.map(trip =>
            <tr key={trip.id}>
              <td>{trip.id}</td>
              <td>{trip.origin}</td>
              <td>{trip.destination}</td>
              <td>{trip.airline}</td>
              <td>{trip.date}</td>
              <td className={`emission-level ${trip.emission_level_category}`}><strong>{trip.emission_level}</strong></td>
            </tr>
          )}
        </tbody>
      </Table> */}

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
        currentPage={currentPage} />
    </>
  )
}

export default DataTable