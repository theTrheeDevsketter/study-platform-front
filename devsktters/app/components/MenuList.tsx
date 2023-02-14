'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'

export interface listItem{
        url:string,
        icon:string,
        title:string
};

export interface listItems{
    items: listItem[]
}


function MenuList({items}:listItems) {

  const { info } = useContext(AuthContext)
    
  return (
        <ul className="DESKTOP-MENU hidden mt-[50px] px-5 lg:flex flex-col">

          {
            info?.role === 'admin' &&
            <li key={'Admin-page'}>
                  <Link href={'/admin'}>
                    <div className='flex w-full'>
                      <div className='flex-none flex-end w-[30%] ml-5'>{'🐧'}</div>
                      <div className='w-[70%] flex flex-end '>{'Admin'}</div>
                    </div>
                  </Link>
                </li>

          }
          {
              items.map(({url,icon,title}, i) => 
                <li key={url+i}>
                  <Link href={url}>
                    <div className='flex w-full'>
                      <div className='flex-none flex-end w-[30%] ml-5'>{icon}</div>
                      <div className='w-[70%] flex flex-end '>{title}</div>
                    </div>
                  </Link>
                </li>
              )
          }
        </ul>
  ) 
}

export default MenuList