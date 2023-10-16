import { Col } from 'react-bootstrap'
import { useAppSelector } from '../../store/store';
import { DataTable, FilterButton, NoResult, SortButton, Spinner } from '..';
import { SetURLSearchParams } from 'react-router-dom';
import './content.css';

interface IContentProps {
  isLoading: boolean
  params: URLSearchParams
  setParams: SetURLSearchParams
}

const Content = (props: IContentProps) => {
  const { isLoading, params, setParams } = props;
  const trips = useAppSelector((state) => state.trips.data);
  return (
    <Col sm={9} className='result-section'>
      {
        isLoading
          ? <Spinner />
          : trips && trips.length == 0
            ? <NoResult />
            : <>
              <div className='data-actions-container'>
                <SortButton />
                <FilterButton params={params} setParams={setParams} />
              </div>
              <DataTable params={params} setParams={setParams} />
            </>
      }
    </Col >
  )
}

export default Content