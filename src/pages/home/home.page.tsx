import { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { isObjectEmpty } from '../../utilities';
import { Content } from '../../components';
import { useGetAllAirlinesQuery, useGetAllDestinationQuery, useGetAllOriginsQuery } from '../../api/api';
import './home.css';

const HomePage = () => {
  const [params, setParams] = useSearchParams('');
  const [searchCriteria, setSearchCriteria] = useState({
    origin: '',
    destination: '',
    airline: '',
    startDate: '',
    endDate: ''
  });

  const { data: origins } = useGetAllOriginsQuery();
  const { data: destinations } = useGetAllDestinationQuery();
  const { data: airlines } = useGetAllAirlinesQuery();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isObjectEmpty(searchCriteria)) {
      const searchUrlParams = new URLSearchParams(params);
      searchUrlParams.set('origin', searchCriteria.origin);
      searchUrlParams.set('destination', searchCriteria.destination);
      searchUrlParams.set('airline', searchCriteria.airline);
      searchUrlParams.set('startDate', searchCriteria.startDate);
      searchUrlParams.set('endDate', searchCriteria.endDate);
      setParams(searchUrlParams);
    }
  }
  return (
    <div className='home-page-wrapper'>
      <h1>Airfreight Emission Levels</h1>
      <Row>
        <Col sm={3} style={{ borderRight: '1px solid #ccc' }}>
          <Form onSubmit={handleSearch}>
            <Form.Group className="mb-3">
              <Form.Label className="input-label">Origin</Form.Label>
              <Form.Select name='origin' onChange={e => setSearchCriteria({ ...searchCriteria, origin: e.target.value })} aria-label="Default select example">
                <option value=''>Choose origin</option>
                {
                  origins?.map(origin => <option key={origin} value={origin}>{origin}</option>)
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="input-label">Destination</Form.Label>
              <Form.Select name='destination' onChange={e => setSearchCriteria({ ...searchCriteria, destination: e.target.value })} aria-label="Default select example">
                <option value=''>Choose destination</option>
                {
                  destinations?.map(destination => <option key={destination} value={destination}>{destination}</option>)
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="input-label">Airline</Form.Label>
              <Form.Select name='airline' onChange={e => setSearchCriteria({ ...searchCriteria, airline: e.target.value })} aria-label="Default select example">
                <option value=''>Choose airline</option>
                {
                  airlines?.map(airline => <option key={airline} value={airline}>{airline}</option>)
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
        <Content params={params.toString()} searchCriteria={searchCriteria} />
        {/* <Col sm={9} className='result-section'>
          <div className='sort-container'>
            <Button onClick={() => setIsShown(!isShown)} variant='light' className='sort-button'><BsSortDown />sort</Button>
            {
              isShown && <ul className='sort-menu'>
                <li onClick={() => handleSort('AZ', 'origin')}>Origin A to Z</li>
                <li onClick={() => handleSort('ZA', 'origin')}>Origin Z to A</li>
                <li onClick={() => handleSort('AZ', 'destination')}>Destination A to Z</li>
                <li onClick={() => handleSort('ZA', 'destination')}>Destination Z to A</li>
                <li onClick={() => handleSort('AZ', 'airline')}>Airline A to Z</li>
                <li onClick={() => handleSort('ZA', 'airline')}>Airline Z to A</li>
                <li onClick={() => handleSort('AZ', 'date')}>Date newest</li>
                <li onClick={() => handleSort('ZA', 'date')}>Date oldest</li>
              </ul>
            }
          </div>
          {
            isLoading
              ? <Spinner />
              : trips && (trips.length == 0
                ? <NoResult />
                : trips.map(trip =>
                  <ResultCard key={trip.id} trip={trip} />
                )
              )
          }
        </Col> */}
      </Row>
    </div >
  )
}

export default HomePage