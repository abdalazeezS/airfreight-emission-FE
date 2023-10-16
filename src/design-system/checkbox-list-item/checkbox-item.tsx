import { Dropdown } from 'react-bootstrap';

const CheckBoxListItem = ({ item, onClick }: any) => {
  const { value, id, text, checked } = item;
  return (
    <Dropdown.Item className='list-item'>
      <li
        value={value}
        style={{ display: 'flex', gap: 6, alignItems: 'center' }}
        key={id}
        onClick={() => onClick(id)}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={() => { }}
        />
        {text}
      </li>
    </Dropdown.Item >
  )
}

export default CheckBoxListItem