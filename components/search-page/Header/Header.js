import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Link } from 'next/link'
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/solid'
import { Input } from '../../Input'
import { Avatar } from '../../Avatar'
import { HeaderOptions } from './HeaderOptions'

export const HeaderSearch = () => {
  const [inputData, setInputData] = useState('')
  const router = useRouter()
  const submitHandler = (event) => {
    event.preventDefault()
    if (!inputData) return
    router.push(`/search?data=${inputData}`)
  }
  const changeHandler = (event) => {
    setInputData(() => event.target.value)
  }
  return (
    <header className='border-b-[1px] border-gray-100 pb-4'>
      <div className='flex flex-col items-center space-y-3 py-5 md:flex-row md:space-y-0 md:items-center'>
        <img
          src='/images/search.svg'
          className='h-14 md:h-10 cursor-pointer'
          onClick={() => router.push('/')}
        />
        <form
          onSubmit={submitHandler}
          className='input px-2 py-2 max-w-3xl md:flex-grow md:mx-4'
        >
          <Input inputData={inputData} changeHandler={changeHandler} />
          <XIcon
            className='h-5 text-gray-600 cursor-pointer transition transform duration-200 hover:scale-125 sm:mr-3'
            onClick={() => setInputData('')}
          />
          <MicrophoneIcon className='h-5 text-blue-600 cursor-pointer border-l-2 border-gray-300 pl-3 mr-3 hidden sm:inline-flex' />
          <SearchIcon className='h-5 cursor-pointer text-gray-600 hidden sm:inline-flex' />
        </form>
        <div className='hidden md:ml-auto md:flex md:justify-center md:space-x-4 md:items-center'>
          <ViewGridIcon className='h-11 w-11 p-2 text-gray-600 cursor-pointer rounded-full hover:bg-gray-200' />
          <Avatar />
        </div>
      </div>
      <HeaderOptions />
    </header>
  )
}
