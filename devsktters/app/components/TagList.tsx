import React from 'react'

export interface tagItem{
    title:string,
    icon:string,
};

export interface listItems{
items: tagItem[]
}

function TagList({items}:listItems) {
  return (
    <ul className="DESKTOP-MENU hidden h-[60%] my-2 px-5 bg-slate-100 shadow-md lg:flex flex-col">
          {
              items.map(({icon,title}) => 
                <li key={title}>
                    <div className='flex w-full'>
                      <div className='flex-none flex-end w-[30%] ml-5'>{icon}</div>
                      <div className='w-[70%] flex flex-end '>{title}</div>
                    </div>
                </li>
              )
          }
        </ul>
  )
}

export default TagList