import Link from 'next/link';
import React from 'react'

export interface cardItem{
   imageAvatar:string,
   userName : string,
   timePost:string,
   affiliatedTime:string,
   postDescription: string,
   likes:string,
   request:string,
};

export interface listCardItems{
   items: cardItem[]
}

function CardPost({items}:listCardItems) {
  return (

   <>
      {
      items.map(({imageAvatar,userName,timePost,affiliatedTime,postDescription,likes,request},i) =>
      <Link key={userName+i} href={'/posts/detail'}>
         <div key={userName+i} className="flex bg-white shadow-lg rounded-lg mx-auto my-10 max-w-sm md:max-w-2xl ">
            <div className="flex items-start px-4 py-6 w-[100%]">
               <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src= {imageAvatar} alt="avatar"/>
               <div className='w-[100%]'>
                     <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900 -mt-1">{userName} </h2>
                        <small className="text-sm text-gray-700">{timePost}</small>
                     </div>
                     <p className="text-gray-700">{affiliatedTime}</p>
                     <p className="mt-3 text-gray-700 text-sm">
                        {postDescription}
                     </p>
                     <div className="mt-4 flex items-center">
                        <div className="flex mr-2 text-gray-700 text-sm">
                           <svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                           </svg>
                           <span>{likes}</span>
                        </div>
                        <div className="flex mr-2 text-gray-700 text-sm ">
                           <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                           </svg>
                           <span>{request}</span>
                        </div>
                        <div className="flex mr-2 text-gray-700 text-sm">
                           <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                           </svg>
                           <span>share</span>
                        </div>
                     </div>
               </div>
            </div>
         </div>
      </Link>
      
      )
      }
   </>
    

  );
}

export default CardPost