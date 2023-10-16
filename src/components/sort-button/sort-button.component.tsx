import { BsSortDown } from 'react-icons/bs'
import { Dropdown } from 'react-bootstrap';
import useSort from '../../hooks/sort.hook';
import './sort.css';
import { sortOptions } from '../../data';
import { CustomizedButton, ListItem } from '../../design-system';

const SortButton = () => {
  const { handleSort, isShown, setIsShown } = useSort();
  return (
    <div className='sort-filter-container'>
      <CustomizedButton
        onClick={() => setIsShown(!isShown)}
        variant='light'
        prefixIcon={<BsSortDown />}
        text='sort' />
      <Dropdown.Menu show={isShown}>
        {
          sortOptions.map((option, index) =>
            <ListItem
              key={option.label + index}
              children={option.label}
              onClick={() => handleSort(option.type, option.field)}
            />
          )
        }
      </Dropdown.Menu>
    </div>
  )
}

export default SortButton