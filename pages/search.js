import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { HeaderSearch } from '../components/search-page/Header/Header'
import { SearchResults } from '../components/search-page/SearchResults'
import { Pagination } from './../components/Pagination'
export default function Search({ results }) {
  const router = useRouter()
  const totalResults = +results.searchInformation?.totalResults
  const searchQuery = router.query.data
  return (
    <div className='px-3.5'>
      <Head>
        <title>Google Search - {searchQuery}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <HeaderSearch searchQuery={searchQuery} />
      {/* Main */}
      <SearchResults results={results} />
      {totalResults !== 0 && <Pagination />}
    </div>
  )
}
export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY
  const CONTEXT_KEY = process.env.CONTEXT_KEY
  const startIndex = context.query.start || '0'
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${encodeURIComponent(
      context.query.data
    )}&start=${startIndex}`
  ).then((response) => response.json())
  return {
    props: {
      results: data,
    },
  }
}
