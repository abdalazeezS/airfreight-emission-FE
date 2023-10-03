import './result-card.css';

const ResultCard = ({ trip }: any) => {
  var category = '';
  if (trip.emission_level < 35) {
    category = 'green';
  } else if (trip.emission_level < 80) {
    category = 'yellow';
  } else {
    category = 'red'
  }
  console.log(category);
  return (
    <div className="search-result-card">
      <div className="trip-details">
        <h2>Trip Details</h2>
        <p><strong>id:</strong> {trip.id}</p>
        <p><strong>Origin:</strong> {trip.origin}</p>
        <p><strong>Destination:</strong> {trip.destination}</p>
        <p><strong>Airline:</strong> {trip.airline}</p>
        <p><strong>Date:</strong> {trip.date}</p>
      </div>
      <div className={`emission-level ${category}`}>
        <p><strong>Airfreight Emission level:</strong> <br />
          {trip.emission_level} kg CO2</p>
      </div>
    </div >
  )
}

export default ResultCard