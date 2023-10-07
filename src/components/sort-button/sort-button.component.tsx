import { BsSortDown } from 'react-icons/bs'
import { Button } from 'react-bootstrap';
import useSort from '../../hooks/sort.hook';

const SortButton = () => {
  const { handleSort, isShown, setIsShown } = useSort();
  return (
    <div className='sort-filter-container'>
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
  )
}

export default SortButton