import { Button } from 'react-bootstrap'
import './button.css';

const CustomizedButton = ({ text, prefixIcon, variant, ...rest }: any) => {
  return (
    <Button
      className={`customized-button btn ${variant}`}
      variant={`${variant}`} {...rest}>
      {prefixIcon}{text}
    </Button>
  )
}

export default CustomizedButton