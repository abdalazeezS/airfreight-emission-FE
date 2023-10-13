import { useState } from 'react'
import useToggleMenu from './toggle-menu.hook';
import { filterOptionsList } from '../data/data';
import { SetURLSearchParams } from 'react-router-dom';

interface IUseFilterProps {
  params: URLSearchParams,
  setParams: SetURLSearchParams
}

const useFilter = (props: IUseFilterProps) => {
  const { isShown, setIsShown } = useToggleMenu();
  const [filterOptions, setFilterOptions] = useState(filterOptionsList);

  const toggleCheckbox = (itemId: number) => {
    const isChecked = filterOptions.find(item => item.id === itemId)?.checked;
    const value = filterOptions.find(item => item.id === itemId)!.value;
    if (!isChecked) {
      if (props.params.get('q') == null)
        props.params.append('q', value);
      else
        props.params.append('q', value);
    } else {
      props.params.delete('q', value);
    }
    props.setParams(props.params);
    setFilterOptions((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    )
  };
  return {
    isShown, setIsShown, filterOptions, toggleCheckbox
  }
}

export default useFilter