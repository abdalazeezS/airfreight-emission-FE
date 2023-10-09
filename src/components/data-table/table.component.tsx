import { Pagination, Table } from 'react-bootstrap'
import { ITrip } from '../../types'
import './data-table.css';
import { useState } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

interface IDataTableProps {
  trips: ITrip[];
  params: URLSearchParams
  setParams: SetURLSearchParams
}

const DataTable = (props: IDataTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (index: number) => {
    setCurrentPage(index + 1);
    props.params.set('p', (index + 1).toString());
    props.setParams(props.params);
  }

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
          {props.trips?.map(trip =>
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
      <Pagination>
        {
          Array(3).fill(0).map((e, index) =>
            <Pagination.Item key={index}
              onClick={() => handleClick(index)}
              active={index + 1 == currentPage}>{index + 1}
            </Pagination.Item>
          )
        }
      </Pagination>
    </>
  )
}

export default DataTable