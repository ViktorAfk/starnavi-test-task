'use client';

import Link from "next/link";
import clsx from "clsx";
import { useCreateParams } from "@/app/hooks/use-create-params";

export default function  Pagination ({ previousPage, nextPage }: {
  nextPage: string | null;
  previousPage: string | null;
}) {
  const {
    createPageURL, 
    next, 
    checkedPreviousPage 
  } = useCreateParams(nextPage, previousPage);

  return (
    <div className="flex justify-between gap-4">
      <Link 
        className={clsx("leading-10 bg-bg-color text-center w-24 rounded-2xl hover:text-decorated " 
        + "transition-all active:translate-x-px active:translate-y-px", {
        'invisible pointer-events-none': !previousPage,
        })} 
        href={createPageURL(checkedPreviousPage)}
      >
        Previous
      </Link>

       <Link 
        className={clsx("leading-10 bg-bg-color text-center w-24 rounded-2xl hover:text-decorated " 
          + "transition-all active:translate-x-px active:translate-y-px", {
          'invisible pointer-events-none': !nextPage,
          })}  
        href={createPageURL(next)}
        >
          Next
      </Link>
    </div>
  )
}
