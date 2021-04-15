import React from 'react'

export const HeaderOption = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent pb-2 hover:text-blue-600 hover:border-blue-600 ${
        selected && 'text-blue-600 border-blue-600'
      }`}
    >
      <Icon className='h-5 w-5 cursor-pointer' />
      <p className='cursor-pointer hidden md:inline-flex'>{title}</p>
    </div>
  )
}
