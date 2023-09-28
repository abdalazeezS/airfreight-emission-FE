import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import noResult from '../../assets/no-results.png';
import ResultCard from '../../components/result-card/result-card.component';
import { ITrip } from '../../types/index'
import { isObjectEmpty } from '../../utilities';
import './home.css';
import { fetchAirlines, fetchDestinations, fetchOrigins, fetchTrips, fetchTripsWithQuery } from '../../services/api';

const HomePage = () => {
  const [trips, setTrips] = useState<ITrip[]>([]);
  const [origins, setOrigins] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    origin: '',
    destination: '',
    airline: '',
    startDate: '',
    endDate: ''
  })

  const [params, setParams] = useSearchParams();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isObjectEmpty(searchCriteria)) {
      const searchUrlParams = new URLSearchParams(params);
      searchUrlParams.set('origin', searchCriteria.origin);
      searchUrlParams.set('destination', searchCriteria.destination);
      searchUrlParams.set('airline', searchCriteria.airline);
      searchUrlParams.set('startDate', searchCriteria.startDate);
      searchUrlParams.set('endDate', searchCriteria.endDate);

      setParams(searchUrlParams);
      console.log(searchUrlParams.toString());

      const res = await fetchTripsWithQuery(searchUrlParams);
      const result = await res.json();
      setTrips(result);
      console.log({ result });
    }
  }
  useEffect(() => {
    fetchTrips().then(res => setTrips(res));
    fetchDestinations().then(res => setDestinations(res));
    fetchOrigins().then(res => setOrigins(res));
    fetchAirlines().then(res => setAirlines(res));
  }, []);


  return (
    <div className='home-page-wrapper'>
      <h1>Airfreight Emission Levels</h1>
      <Row>
        <Col sm={3} style={{ borderRight: '1px solid #ccc' }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="input-label">Origin</Form.Label>
              <Form.Select name='origin' onChange={e => setSearchCriteria({ ...searchCriteria, origin: e.target.value })} aria-label="Default select example">
                <option value=''>Choose origin</option>
                {
                  origins.map(origin => <option key={origin} value={origin}>{origin}</option>)
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="input-label">Destination</Form.Label>
              <Form.Select name='destination' onChange={e => setSearchCriteria({ ...searchCriteria, destination: e.target.value })} aria-label="Default select example">
                <option value=''>Choose destination</option>
                {
                  destinations.map(destination => <option key={destination} value={destination}>{destination}</option>)
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="input-label">Airline</Form.Label>
              <Form.Select name='airline' onChange={e => setSearchCriteria({ ...searchCriteria, airline: e.target.value })} aria-label="Default select example">
                <option value=''>Choose airline</option>
                {
                  airlines.map(airline => <option key={airline} value={airline}>{airline}</option>)
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="input-label">Start Date</Form.Label>
              <Form.Control name='startDay' onChange={e => setSearchCriteria({ ...searchCriteria, startDate: e.target.value })} type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="input-label">End Date</Form.Label>
              <Form.Control name='endDay' onChange={e => setSearchCriteria({ ...searchCriteria, endDate: e.target.value })} type="date" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Button type='submit' style={{ width: '100%' }} variant="primary">Search</Button>
              <Button type='reset' onClick={() => { setParams({}) }} style={{ width: '100%', backgroundColor: 'transparent', border: 'none' }} variant="light">Reset Fields</Button>
            </Form.Group>
          </Form>
        </Col>
        <Col sm={9} className='result-section'>
          {
            trips.length == 0
              ? <div className="empty-logo">
                <img style={{ width: 100 }} src={noResult} alt="empty result" />
                <span style={{ color: '#00000061' }}>Let's Begin the Search!</span>
              </div>
              : trips.map(trip =>
                <ResultCard key={trip.id} trip={trip} />
              )
          }
        </Col>
      </Row>
    </div >
  )
}

export default HomePage