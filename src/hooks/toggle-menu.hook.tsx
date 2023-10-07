import { useEffect, useState } from 'react'

const useToggleMenu = () => {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    const closeUlOnClickOutside = (event: MouseEvent) => {
      if (isShown && !(event.target as HTMLElement).closest('.sort-filter-container')) {
        setIsShown(false)
      }
    };
    document.addEventListener('click', closeUlOnClickOutside);
    return () => {
      document.removeEventListener('click', closeUlOnClickOutside);
    };
  }, [isShown]);
  return { isShown, setIsShown }
}

export default useToggleMenu