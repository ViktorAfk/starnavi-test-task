import { usePathname, useSearchParams } from "next/navigation";
import { getUrlId } from "../api/utils";

// Use the custom hook to calculate search params for pagination
export const useCreateParams = (nextPage: string | null, 
  previousPage: string | null) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || '1';
  
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if(pageNumber === null) {
      return `${currentPage.toString()}`;
    }

    if(pageNumber === '' || pageNumber === '1') {
      params.delete('page');
      return `/`;
    }

    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };
 
  const next = nextPage === null ? currentPage.toString() : getUrlId(nextPage);
  const previous = previousPage === null ? '1' : getUrlId(previousPage);
  const checkedPreviousPage = previous || '1';

  return { createPageURL, next, checkedPreviousPage}
}
