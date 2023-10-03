import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { Content, SearchForm } from '../../components';
import { ISearchCriteria } from '../../types';
import './home.css';
import { setTrips } from '../../store/trips-slice';
import { useAppDispatch } from '../../store/store';
import { useGetAllTripsQuery } from '../../api/api';
import { isObjectEmpty } from '../../utilities';

const HomePage = () => {
  const [params, setParams] = useSearchParams('');
  const [searchCriteria, setSearchCriteria] = useState<ISearchCriteria>({
    origin: '',
    destination: '',
    airline: '',
    startDate: '',
    endDate: ''
  });
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAllTripsQuery(isObjectEmpty(searchCriteria) ? '' : params.toString());

  useEffect(() => {
    dispatch(setTrips(data))
  }, [data]);
  return (
    <div className='home-page-wrapper'>
      <h1>Airfreight Emission Levels</h1>
      <Row>
        <SearchForm
          searchCriteria={searchCriteria}
          setSearchCriteria={setSearchCriteria}
          params={params}
          setParams={setParams}
        />
        <Content isLoading={isLoading} />
      </Row>
    </div >
  )
}

export default HomePage