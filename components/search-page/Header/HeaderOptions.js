import React from 'react'

import {
  SearchIcon,
  PhotographIcon,
  PlayIcon,
  NewspaperIcon,
  MapIcon,
  DotsVerticalIcon,
} from '@heroicons/react/solid'
import { HeaderOption } from './HeaderOption'

export const HeaderOptions = () => {
  return (
    <div className='flex justify-between max-w-4xl text-gray-600  text-sm lg:text-base md:pl-36'>
      <div className='flex space-x-9 md:space-x-6'>
        <HeaderOption Icon={SearchIcon} title='All' selected />
        <HeaderOption Icon={PhotographIcon} title='Images' />
        <HeaderOption Icon={PlayIcon} title='Videos' />
        <HeaderOption Icon={NewspaperIcon} title='News' />
        <HeaderOption Icon={MapIcon} title='Maps' />
        <HeaderOption Icon={DotsVerticalIcon} title='More' />
      </div>
      <div className='hidden sm:flex sm:space-x-4'>
        <p className='link'>Settings</p>
        <p className='link'>Tools</p>
      </div>
    </div>
  )
}
