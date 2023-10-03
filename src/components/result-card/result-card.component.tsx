import { ITrip } from '../../types';
import './result-card.css';

interface IResultCardProps {
  trip: ITrip;
}

const ResultCard = (props: IResultCardProps) => {
  return (
    <div className="search-result-card">
      <div className="trip-details">
        <h2>Trip Details</h2>
        <p><strong>id:</strong> {props.trip.id}</p>
        <p><strong>Origin:</strong> {props.trip.origin}</p>
        <p><strong>Destination:</strong> {props.trip.destination}</p>
        <p><strong>Airline:</strong> {props.trip.airline}</p>
        <p><strong>Date:</strong> {props.trip.date}</p>
      </div>
      <div className={`emission-level ${props.trip.emission_level_category}`}>
        <p><strong>Airfreight Emission level:</strong> <br />
          {props.trip.emission_level} kg CO2</p>
      </div>
    </div >
  )
}

export default ResultCard