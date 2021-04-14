import Head from 'next/head'
import { Avatar } from '../components/Avatar'
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
export default function Home() {
  const handleClick = (event) => {
    event.preventDefault()
  }
  return (
    <div className='flex flex-col min-h-screen px-3.5 w-full'>
      <Head>
        <title>Google</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* HEADER */}
      <header className='flex justify-between items-center py-2 space-x-2'>
        <img src='/images/logo.svg' className='w-8 h-8' />
        <div className='flex items-center space-x-6'>
          <ul className='flex space-x-4 text-gray-600'>
            <li className='link'>Gmail</li>
            <li className='link'>Images</li>
          </ul>
          <ViewGridIcon className='h-10 w-10 p-2 text-gray-600 cursor-pointer rounded-full hover:bg-gray-100' />
          <Avatar />
        </div>
      </header>
      {/* MAIN */}
      <main className='flex justify-center items-center flex-grow'>
        <form className='flex items-center flex-col w-full'>
          <img src='/images/search.svg' className='h-20 mb-4' />
          <div className='flex items-center w-full px-5 py-3 mb-4 rounded-full max-w-md border border-gray-200 focus-within:shadow-input hover:shadow-input'>
            <SearchIcon className='h-5 w-5 cursor-pointer text-gray-600' />
            <input type='text' className='flex-grow focus:outline-none px-2' />
            <MicrophoneIcon className='h-5 w-5 cursor-pointer text-gray-600' />
          </div>
          <div className='hidden space-x-4 sm:flex'>
            <button className='btn' onClick={handleClick}>
              Google Search
            </button>
            <button className='btn' onClick={handleClick}>
              I'm feeling lucky
            </button>
          </div>
        </form>
      </main>
      {/* FOOTER */}
      <footer></footer>
    </div>
  )
}
