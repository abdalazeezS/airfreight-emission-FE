import { Dropdown } from 'react-bootstrap'
import { BsFilter } from 'react-icons/bs'
import useFilter from '../../hooks/filter.hook'
import { CheckBoxListItem, CustomizedButton } from '../../design-system'
import { PropsTypes } from '../../types/props'

const FilterButton = (props: PropsTypes.FilterButtonProps) => {
  const { filterOptions, isShown, setIsShown, toggleCheckbox } = useFilter(props);
  return (
    <div className='sort-filter-container'>
      <CustomizedButton
        onClick={() => setIsShown(!isShown)}
        variant='light'
        prefixIcon={<BsFilter />}
        text='filter'
      />
      <Dropdown.Menu show={isShown}>
        {
          filterOptions.map((item) =>
            <CheckBoxListItem
              key={item.id}
              item={item}
              onClick={toggleCheckbox}
            />
          )
        }
      </Dropdown.Menu>
    </div>
  )
}

export default FilterButton