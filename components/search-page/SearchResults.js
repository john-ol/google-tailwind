import React from 'react'

export const SearchResults = ({ results }) => {
  const { searchInformation, items } = results
  return (
    <div className='mt-3 max-w-4xl md:pl-36'>
      <p className='text-sm text-gray-600'>
        About {searchInformation?.formattedTotalResults} results (
        {searchInformation?.formattedSearchTime} seconds)
      </p>
      <ul className='break-words py-6 space-y-8 md:space-y-6'>
        {items?.map((item) => (
          <li key={item.link}>
            <div className='group'>
              <a href={item.link} className='text-sm'>
                {item.formattedUrl}
              </a>
              <a
                href={item.link}
                className='text-xl text-blue-800 font-medium group-hover:underline'
              >
                <h2 className='py-1'>{item.title}</h2>
              </a>
            </div>

            <p className='line-clamp-2 text-sm md:text-base'>{item.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
