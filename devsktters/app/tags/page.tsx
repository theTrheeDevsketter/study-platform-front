import React from 'react'

export interface tagItem{
    tag:string
}

export interface listTags{
    tags: tagItem[]
}

function Tags({tags}:listTags) {
  return (
    <h1 className='text-4xl mt-16 text-indigo-500'>Tags</h1>
    
  )
}

export default Tags