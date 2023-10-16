const filterOptionsList = [
  { id: 1, text: 'Green emission level', checked: false, value: 'green' },
  { id: 2, text: 'Yellow emission level', checked: false, value: 'yellow' },
  { id: 3, text: 'Red emission level', checked: false, value: 'red' },
]

const sortOptions = [
  { type: 'AZ', field: 'origin', label: 'Origin A to Z' },
  { type: 'ZA', field: 'origin', label: 'Origin Z to A' },
  { type: 'AZ', field: 'destination', label: 'Destination A to Z' },
  { type: 'ZA', field: 'destination', label: 'Destination Z to A' },
  { type: 'AZ', field: 'airline', label: 'Airline A to Z' },
  { type: 'ZA', field: 'airline', label: 'Airline Z to A' },
  { type: 'AZ', field: 'date', label: 'Date newest' },
  { type: 'ZA', field: 'date', label: 'Date oldest' },
]
export { filterOptionsList, sortOptions }