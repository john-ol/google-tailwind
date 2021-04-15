import React from 'react'
import Head from 'next/head'
import { HeaderSearch } from '../components/search-page/Header/Header'
import { SearchResults } from '../components/search-page/SearchResults'
export default function Search() {
  return (
    <div className='px-3.5'>
      <Head>
        <title>Google Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <HeaderSearch />
      {/* Main */}
      <SearchResults />
    </div>
  )
}
