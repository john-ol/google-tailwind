import React from 'react'
import { ViewGridAddIcon } from '@heroicons/react/solid'
import { Avatar } from '../Avatar'

export const Header = () => {
  return (
    <header className='flex justify-between items-center px-3.5 py-2 space-x-2'>
      <img src='/images/logo.svg' className='w-8 h-8' />
      <div className='flex items-center space-x-6'>
        <ul className='flex space-x-4 text-gray-600'>
          <li className='link'>Gmail</li>
          <li className='link'>Images</li>
        </ul>
        <ViewGridAddIcon className='h-10 w-10 p-2 text-gray-600 cursor-pointer rounded-full hover:bg-gray-100' />
        <Avatar />
      </div>
    </header>
  )
}
