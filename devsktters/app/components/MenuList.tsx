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
        <ul className="DESKTOP-MENU hidden mt-[50px] px-5 lg:flex flex-col">
          {
              items.map(({url,icon,title}) => 
                <li key={url}>
                  <a href={url}>
                    <div className='flex w-full'>
                      <div className='flex-none flex-end w-[30%] ml-5'>{icon}</div>
                      <div className='w-[70%] flex flex-end '>{title}</div>
                    </div>
                  </a>
                </li>
              )
          }
        </ul>
  ) 
}

export default MenuList