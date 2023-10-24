import { useState } from 'react'
import useToggleMenu from './toggle-menu.hook';
import { filterOptionsList } from '../data';
import { PropsTypes } from '../types/props';

const useFilter = (props: PropsTypes.UseFilterProps) => {
  const { params, setParams } = props;
  const { isShown, setIsShown } = useToggleMenu();
  const [filterOptions, setFilterOptions] = useState(filterOptionsList);

  const toggleCheckbox = (itemId: number) => {
    const isChecked = filterOptions.find(item => item.id === itemId)?.checked;
    const value = filterOptions.find(item => item.id === itemId)!.value;
    if (!isChecked) {
      if (params.get('q') == null)
        params.append('q', value);
      else
        params.append('q', value);
    } else {
      params.delete('q', value);
    }
    setParams(params);
    setFilterOptions((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      ))
  };
  return {
    isShown, setIsShown, filterOptions, toggleCheckbox
  }
}

export default useFilter