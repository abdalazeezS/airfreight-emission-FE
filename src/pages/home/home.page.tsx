import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { Content, SearchForm } from '../../components';
import { ISearchCriteria } from '../../types';
import { setTrips } from '../../store/trips-slice';
import { useAppDispatch } from '../../store/store';
import { useGetAllTripsQuery } from '../../api/api';
import './home.css';
import { ErrorPage } from '..';

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
  const { data, isLoading, isError } = useGetAllTripsQuery(params.toString(), {
    refetchOnMountOrArgChange: true,
  });
  useEffect(() => {
    dispatch(setTrips(data))
  }, [data]);

  return (
    isError ? <ErrorPage /> :
      <div className='home-page-wrapper'>
        <h1>Airfreight Emission Levels</h1>
        <Row>
          <SearchForm
            searchCriteria={searchCriteria}
            setSearchCriteria={setSearchCriteria}
            params={params}
            setParams={setParams}
          />
          <Content isLoading={isLoading} params={params} setParams={setParams} />
        </Row>
      </div >
  )
}

export default HomePage