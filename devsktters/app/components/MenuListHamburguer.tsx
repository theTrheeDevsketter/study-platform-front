import React from 'react'
import Link from 'next/link'

export interface listItem{
    url:string,
    title:string
};

export interface listItems{
items: listItem[]
}

function MenuListHamburguer({items}:listItems) {
  return (
    
        <ul className="flex flex-col items-center justify-between min-h-[250px] ">
            {
                items.map(({url,title},i) =>
                    <li key={url+i} className="border-b border-gray-400 my-8 uppercase">
                        <Link href={url}>{title}</Link>
                    </li>
                )
            }
        </ul>
  )
}

export default MenuListHamburguer