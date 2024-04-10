'use client';

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getUrlId } from "@/app/utilies";

export default function Pagination ({previousPage, nextPage}: {
  nextPage: string | null;
  previousPage: string | null;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || '';
  
  const createPageURL = (pageNumber: number | string | null) => {
    const params = new URLSearchParams(searchParams);

    if(pageNumber === null) {
      return `${currentPage.toString()}`;
    }

    if(pageNumber === '') {
      params.delete('page');
      return `/`;
    }

    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };
 
  const next = nextPage === null ? currentPage.toString() : getUrlId(nextPage);
  const previous = previousPage === null ? '' : getUrlId(previousPage);
  const checkedPrevious = previous || '';

  return (
    <div className="flex justify-center gap-4">
      <Link className="leading-10 bg-bg-color text-center w-24 rounded-2xl hover:text-decorated" href={createPageURL(checkedPrevious)}>
        Previous
      </Link>

      <Link className="leading-10 bg-bg-color text-center w-24 rounded-2xl hover:text-decorated" href={createPageURL(next)}>
        Next
      </Link>
    </div>
  )
}
