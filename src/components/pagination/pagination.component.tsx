import { Pagination } from 'react-bootstrap';
import { PropsTypes } from '../../types/props';

const TablePagination = (props: PropsTypes.TablePaginationProps) => {
  const { currentPage, handlePageChange, pages } = props;
  return (
    <Pagination>
      {
        pages.map((e, index) =>
          <Pagination.Item key={index}
            onClick={() => handlePageChange(index)}
            active={index + 1 == currentPage}>{index + 1}
          </Pagination.Item>
        )
      }
    </Pagination>
  )
}

export default TablePagination