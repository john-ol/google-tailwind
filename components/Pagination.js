import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/solid'

export const Pagination = () => {
  const router = useRouter()
  const startIndex = Number(router.query.start) || 0
  return (
    <div className='flex justify-around max-w-xl text-sm pb-4 md:pl-36 md:max-w-2xl text-blue-800'>
      {startIndex >= 10 && (
        <Link
          href={`/search?data=${router.query.data}&start=${startIndex - 10}`}
        >
          <div className='flex flex-col items-center cursor-pointer'>
            <ArrowNarrowLeftIcon className='h-5' />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?data=${router.query.data}&start=${startIndex + 10}`}>
        <div className='flex flex-col items-center cursor-pointer'>
          <ArrowNarrowRightIcon className='h-5' />
          <p>Next</p>
        </div>
      </Link>
    </div>
  )
}
