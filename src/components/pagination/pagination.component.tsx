import { Pagination } from 'react-bootstrap';

interface ITablePaginationProps {
  pages: Array<number>;
  handlePageChange: (index: number) => void;
  currentPage: number;
}

const TablePagination = (props: ITablePaginationProps) => {
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