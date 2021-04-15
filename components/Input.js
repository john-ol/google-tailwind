import React from 'react'

export const Input = ({ changeHandler, inputData }) => {
  return (
    <input
      type='text'
      onChange={changeHandler}
      value={inputData}
      className='flex-grow focus:outline-none px-2'
    />
  )
}
