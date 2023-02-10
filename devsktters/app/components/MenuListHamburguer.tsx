import React from 'react'

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
                items.map(({url,title}) =>
                    <li key={url} className="border-b border-gray-400 my-8 uppercase">
                        <a href={url}>{title}</a>
                    </li>
                )
            }
        </ul>
  )
}

export default MenuListHamburguer