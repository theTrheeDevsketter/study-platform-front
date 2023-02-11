import Link from 'next/link'

export interface socialItem{
    url : '',
    title:string,
    icon:string,
};

export interface listItems{
items: socialItem[]
}

function SocialMedia({items}:listItems) {
  return (
    <ul className="DESKTOP-MENU hidden p-5 lg:flex flex-col">
          {
              items.map(({url,icon,title},i) => 
                <li key={url+i+title}>
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

export default SocialMedia