import { Table } from 'react-bootstrap'
import './data-table.css';
import { SetURLSearchParams } from 'react-router-dom';
import Pagination from '../pagination/pagination.component';
import UsePagination from '../../hooks/pagination.hook';
import { useAppSelector } from '../../store/store';

interface IDataTableProps {
  params: URLSearchParams
  setParams: SetURLSearchParams
}

const DataTable = (props: IDataTableProps) => {
  const { params, setParams } = props;
  const trips = useAppSelector((state) => state.trips);
  const totalRecords = trips.totalRecords;
  const { currentPage, handlePageChange, totalPages } = UsePagination({ totalRecords, params, setParams });
  return (
    <>
      <Table className='data-table' striped bordered hover>
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
      </Table>
      <Pagination
        pages={Array.from({ length: totalPages }, (_value, index) => index + 1)}
        handlePageChange={handlePageChange}
        currentPage={currentPage} />
    </>
  )
}

export default DataTable