import { Button, Col, Form } from 'react-bootstrap'
import { useGetAllAirlinesQuery, useGetAllDestinationQuery, useGetAllOriginsQuery } from '../../api/api';
import { SetURLSearchParams } from 'react-router-dom';
import { isObjectEmpty } from '../../utilities';
import { ISearchCriteria } from '../../types';

interface ISearchFormProps {
  setSearchCriteria: (params: ISearchCriteria) => void
  setParams: SetURLSearchParams
  searchCriteria: ISearchCriteria
  params: URLSearchParams
}

const SearchForm = (props: ISearchFormProps) => {
  const { data: origins } = useGetAllOriginsQuery();
  const { data: destinations } = useGetAllDestinationQuery();
  const { data: airlines } = useGetAllAirlinesQuery();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isObjectEmpty(props.searchCriteria)) {
      const searchUrlParams = new URLSearchParams(props.params);
      searchUrlParams.set('origin', props.searchCriteria.origin);
      searchUrlParams.set('destination', props.searchCriteria.destination);
      searchUrlParams.set('airline', props.searchCriteria.airline);
      searchUrlParams.set('startDate', props.searchCriteria.startDate);
      searchUrlParams.set('endDate', props.searchCriteria.endDate);
      props.setParams(searchUrlParams);
    }
  }
  return (
    <Col sm={3} style={{ borderRight: '1px solid #ccc' }}>
      <Form onSubmit={handleSearch}>
        <Form.Group className="mb-3">
          <Form.Label className="input-label">Origin</Form.Label>
          <Form.Select name='origin' onChange={e => props.setSearchCriteria({ ...props.searchCriteria, origin: e.target.value })} aria-label="Default select example">
            <option value=''>Choose origin</option>
            {
              origins?.map(origin => <option key={origin} value={origin}>{origin}</option>)
            }
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="input-label">Destination</Form.Label>
          <Form.Select name='destination' onChange={e => props.setSearchCriteria({ ...props.searchCriteria, destination: e.target.value })} aria-label="Default select example">
            <option value=''>Choose destination</option>
            {
              destinations?.map(destination => <option key={destination} value={destination}>{destination}</option>)
            }
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="input-label">Airline</Form.Label>
          <Form.Select name='airline' onChange={e => props.setSearchCriteria({ ...props.searchCriteria, airline: e.target.value })} aria-label="Default select example">
            <option value=''>Choose airline</option>
            {
              airlines?.map(airline => <option key={airline} value={airline}>{airline}</option>)
            }
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="input-label">Start Date</Form.Label>
          <Form.Control name='startDay' onChange={e => props.setSearchCriteria({ ...props.searchCriteria, startDate: e.target.value })} type="date" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="input-label">End Date</Form.Label>
          <Form.Control name='endDay' onChange={e => props.setSearchCriteria({ ...props.searchCriteria, endDate: e.target.value })} type="date" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Button type='submit' style={{ width: '100%' }} variant="primary">Search</Button>
          <Button type='reset' onClick={() => { props.setParams({}) }} style={{ width: '100%', backgroundColor: 'transparent', border: 'none' }} variant="light">Reset Fields</Button>
        </Form.Group>
      </Form>
    </Col>
  )
}

export default SearchForm