import { Button } from 'react-bootstrap'
import { BsFilter } from 'react-icons/bs'
import useFilter from '../../hooks/filter.hook'
import { SetURLSearchParams } from 'react-router-dom'

interface IFilterButtonProps {
  params: URLSearchParams,
  setParams: SetURLSearchParams
}

const FilterButton = (props: IFilterButtonProps) => {
  const { filterOptions, isShown, setIsShown, toggleCheckbox } = useFilter(props);
  return (
    <div className='sort-filter-container'>
      <Button
        onClick={() => setIsShown(!isShown)}
        variant='light'
        className='filter-button'>
        <BsFilter />filter
      </Button>
      {
        isShown &&
        <ul className='filter-menu'>
          {
            filterOptions.map((item) => (
              <li
                value={item.value}
                style={{ display: 'flex', gap: 6, alignItems: 'center' }}
                key={item.id}
                onClick={() => toggleCheckbox(item.id)}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => { }}
                />
                {item.text}
              </li>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default FilterButton