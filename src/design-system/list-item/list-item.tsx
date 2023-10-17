import { Dropdown } from 'react-bootstrap';

const ListItem = ({ onClick, children, ...rest }: any) => {
  return (
    <Dropdown.Item
      className='list-item'
      onClick={onClick}
      children={children}
      {...rest}
    />
  )
}

export default ListItem