import { SetURLSearchParams } from 'react-router-dom';
import { useState } from 'react'

interface IUsePaginationProps {
  totalRecords: number;
  params: URLSearchParams;
  setParams: SetURLSearchParams;
}

const UsePagination = (props: IUsePaginationProps) => {
  const { params, setParams, totalRecords } = props;
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(Number(params.get('p')) || 1);
  const totalPages = Math.ceil(totalRecords / pageSize);

  const handlePageChange = (index: number) => {
    setCurrentPage(index + 1);
    params.set('p', (index + 1).toString());
    setParams(params);
  }
  return {
    currentPage,
    totalPages,
    handlePageChange,
  };
}

export default UsePagination