import { useAppDispatch } from '../store/store';
import useToggleMenu from './toggle-menu.hook';
import { sortTrips } from '../store/trips-slice';

const useSort = () => {
  const { isShown, setIsShown } = useToggleMenu();
  const dispatch = useAppDispatch();
  const handleSort = (type: string, field: string) => {
    dispatch(sortTrips({ type, field }));
    setIsShown(false)
  };
  return { isShown, setIsShown, handleSort }
}

export default useSort