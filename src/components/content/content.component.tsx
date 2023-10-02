import { useEffect, useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import { setTrips, sortTrips } from '../../store/trips-slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useGetAllTripsQuery } from '../../api/api';
import { isObjectEmpty } from '../../utilities';
import { NoResult, ResultCard, Spinner } from '..';
import { BsSortDown } from 'react-icons/bs';

interface IContentProps {
  searchCriteria: Object,
  params: string
}

const Content = (props: IContentProps) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useAppDispatch();
  const trips = useAppSelector((state) => state.trips.data);

  const { data, isLoading } = useGetAllTripsQuery(isObjectEmpty(props.searchCriteria) ? '' : props.params);
  useEffect(() => {
    dispatch(setTrips(data))
  }, [data]);

  const handleSort = (type: string, field: string) => {
    dispatch(sortTrips({ type, field }));
    setIsShown(false)
  };
  return (
    <Col sm={9} className='result-section'>
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
    </Col>
  )
}

export default Content