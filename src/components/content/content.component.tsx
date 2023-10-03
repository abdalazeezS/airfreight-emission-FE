import { useEffect, useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import { sortTrips } from '../../store/trips-slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { NoResult, ResultCard, Spinner } from '..';
import { BsSortDown } from 'react-icons/bs';

interface IContentProps {
  isLoading: boolean
}

const Content = (props: IContentProps) => {
  const [isShown, setIsShown] = useState(false);
  const trips = useAppSelector((state) => state.trips.data);
  const dispatch = useAppDispatch();

  const handleSort = (type: string, field: string) => {
    dispatch(sortTrips({ type, field }));
    setIsShown(false)
  };
  useEffect(() => {
    const closeUlOnClickOutside = (event: any) => {
      if (isShown && !(event.target as HTMLElement).closest('.sort-container')) {
        setIsShown(false);
      }
    };

    document.addEventListener('click', closeUlOnClickOutside);
    return () => {
      document.removeEventListener('click', closeUlOnClickOutside);
    };
  }, [isShown]);
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
        props.isLoading
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