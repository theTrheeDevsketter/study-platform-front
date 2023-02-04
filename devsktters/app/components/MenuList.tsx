import React from 'react'

export interface listItem{
        url:string,
        icon:string,
        title:string
};

export interface listItems{
    items: listItem[]
}


function MenuList({items}:listItems) {
    
  return (
        <ul className="DESKTOP-MENU hidden my-10 lg:flex flex-col">
          {
              items.map(({url,icon,title}) => 
                <li key={url}>
                  <a href={url}>
                    <div className='flex justify-items-center'>
                      <div className='flex-none w-[10%] mx-5'>{icon}</div>
                      <div className='w-[90%] flex flex-end'>{title}</div>
                    </div>
                  </a>
                </li>
              )
          }
        </ul>
  ) 
}

export default MenuList