import { useState } from 'react'
import { Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { Content, SearchForm } from '../../components';
import { ISearchCriteria } from '../../types';
import './home.css';

const HomePage = () => {
  const [params, setParams] = useSearchParams('');
  const [searchCriteria, setSearchCriteria] = useState<ISearchCriteria>({
    origin: '',
    destination: '',
    airline: '',
    startDate: '',
    endDate: ''
  });

  return (
    <div className='home-page-wrapper'>
      <h1>Airfreight Emission Levels</h1>
      <Row>
        <SearchForm
          setSearchCriteria={setSearchCriteria}
          params={params}
          setParams={setParams}
          searchCriteria={searchCriteria}
        />
        <Content params={params.toString()} searchCriteria={searchCriteria} />
      </Row>
    </div >
  )
}

export default HomePage