import { Table } from 'react-bootstrap'
import { ITrip } from '../../types'
import './data-table.css';

interface IDataTableProps {
  trips: ITrip[];
}

const DataTable = (props: IDataTableProps) => {
  return (
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
          <tr>
            <td>{trip.id}</td>
            <td>{trip.origin}</td>
            <td>{trip.destination}</td>
            <td>{trip.airline}</td>
            <td>{trip.date}</td>
            <td className={`emission-level ${trip.emission_level_category}`}><strong>{trip.emission_level}</strong></td>
          </tr>)}
      </tbody>
    </Table>
  )
}

export default DataTable