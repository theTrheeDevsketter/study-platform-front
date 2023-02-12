
import Link from 'next/link';
import { Posti } from '../../src/interfaces/PostiResponse';





async function getData() {
   const res  = await fetch('http://localhost:8080/posts/')
   if (!res.ok) {
     throw 'upsi'
   }
   const data = await res.json()
   return data
   
 }

export default async function CardPost() {

   const posts : Posti[] = await getData()
   
   

  return (

   <>
   
      {
      posts.map(({author,title,tags,avatarImg,id,date,likes,content},i) =>
      <Link key={author + i.toString()} href={`/posts/${id}`}>
         <div key={author + i.toString()} className="flex bg-white shadow-lg rounded-lg mx-auto my-10 max-w-sm md:max-w-2xl ">
            <div className="flex items-start px-4 py-6 w-[100%]">
               <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src= {avatarImg} alt="avatar"/>
               <div className='w-[100%]'>
                     <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900 -mt-1">{author} </h2>
                        <small className="text-sm text-gray-700">{date}</small>
                     </div>
                     <p className="text-gray-700">{date}</p>
                     <p className="mt-3 text-gray-700 text-sm">
                        {title}
                     </p>
                     <div className="mt-4 flex items-center">
                        <div className="flex mr-2 text-gray-700 text-sm">
                           <svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                           </svg>
                           <span>{likes}</span>
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

