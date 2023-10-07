import { Col } from 'react-bootstrap'
import { useAppSelector } from '../../store/store';
import { NoResult, ResultCard, Spinner } from '..';
import { SetURLSearchParams } from 'react-router-dom';
import SortButton from '../sort-button/sort-button.component';
import FilterButton from '../filter-button/filter-button.component';
import './content.css';

interface IContentProps {
  isLoading: boolean
  params: URLSearchParams
  setParams: SetURLSearchParams
}

const Content = (props: IContentProps) => {
  const trips = useAppSelector((state) => state.trips.data);
  return (
    <Col sm={9} className='result-section'>
      {
        props.isLoading
          ? <Spinner />
          : trips && trips.length == 0
            ? <NoResult />
            : <>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                <SortButton />
                <FilterButton params={props.params} setParams={props.setParams} />
              </div>
              {trips?.map(trip =>
                <ResultCard key={trip.id} trip={trip} />)}
            </>
      }
    </Col >
  )
}

export default Content