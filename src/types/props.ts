import { SetURLSearchParams } from "react-router-dom"
import { ISearchCriteria } from "."

export namespace PropsTypes {
  export interface ContentProps {
    isLoading: boolean
    params: URLSearchParams
    setParams: SetURLSearchParams
  }

  export interface DataTableProps {
    params: URLSearchParams
    setParams: SetURLSearchParams
  }

  export interface FilterButtonProps {
    params: URLSearchParams,
    setParams: SetURLSearchParams
  }

  export interface TablePaginationProps {
    pages: Array<number>;
    handlePageChange: (index: number) => void;
    currentPage: number;
  }

  export interface SearchFormProps {
    setSearchCriteria: (params: ISearchCriteria) => void
    setParams: SetURLSearchParams
    searchCriteria: ISearchCriteria
    params: URLSearchParams
  }

  export interface UseFilterProps {
    params: URLSearchParams,
    setParams: SetURLSearchParams
  }

  export interface UsePaginationProps {
    totalRecords: number;
    params: URLSearchParams;
    setParams: SetURLSearchParams;
  }
}