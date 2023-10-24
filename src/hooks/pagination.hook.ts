import { useState } from 'react'
import { PropsTypes } from '../types/props';

const UsePagination = (props: PropsTypes.UsePaginationProps) => {
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