import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { Input } from '../Input'

export const Main = () => {
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
    <main className='flex justify-center items-center flex-grow px-3.5'>
      <form
        onSubmit={submitHandler}
        className='flex items-center flex-col w-full'
      >
        <img src='/images/search.svg' className='h-20 mb-4' />
        <div className='input px-5 py-3 mb-4 max-w-md'>
          <SearchIcon
            onClick={submitHandler}
            className='h-5 w-5 cursor-pointer text-gray-600'
          />
          <Input inputData={inputData} changeHandler={changeHandler} />
          <MicrophoneIcon className='h-5 w-5 cursor-pointer text-gray-600' />
        </div>
        <div className='hidden space-x-4 sm:flex'>
          <button className='btn' onClick={submitHandler}>
            Google Search
          </button>
          <button className='btn' onClick={submitHandler}>
            I'm feeling lucky
          </button>
        </div>
      </form>
    </main>
  )
}
