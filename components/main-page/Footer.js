import React from 'react'
import { AcademicCapIcon } from '@heroicons/react/solid'

export const Footer = () => {
  return (
    <footer className='grid w-full bg-gray-100 text-sm text-gray-500 divide-y-[1px] divide-gray-300'>
      <div className='py-3 px-3.5'>
        <p>Ukraine</p>
      </div>

      <div className='grid px-3.5 gap-y-4 py-2 grid-cols-1 sm:py-4 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense'>
        <div className='flex justify-center items-center space-x-2 sm:col-span-2 lg:col-span-1 lg:col-start-2'>
          <AcademicCapIcon className='h-5 w-5 text-purple-800' />
          <p>Practice with Tailwind css</p>
        </div>
        <div className='flex justify-center whitespace-nowrap items-center space-x-4 sm:justify-self-start'>
          <p className='link'>Advertising</p>
          <p className='link'>Buisness</p>
          <p className='link'>How search works</p>
        </div>
        <div className='flex justify-center items-center space-x-4 sm:ml-auto'>
          <p className='link'>Terms</p>
          <p className='link'>Privacy</p>
          <p className='link'>Settings</p>
        </div>
      </div>
    </footer>
  )
}
