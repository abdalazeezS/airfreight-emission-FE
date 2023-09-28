import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import HomePage from './pages/home/home.page';

function App() {

  return (
    <>
      <HomePage />
      {/* <Form>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label>Label 1</Form.Label>
              <Form.Control type='date'></Form.Control>
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label>Label 1</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Button size='lg' style={{alignSelf: 'end'}} type="submit" className="mb-2">
                Submit
              </Button>
            </Form.Group>

          </Col>
        </Row>
      </Form> */}
    </>
  )
}

export default App