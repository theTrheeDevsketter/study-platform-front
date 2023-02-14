import Link from "next/link";
import { Posti } from "../../../src/interfaces/PostiResponse";

interface Params {
    post:Posti
}

export default function PostAdmin({post}:Params) {

    const {  author,
             avatarImg,
             content,
             date,
             id,
             isPosted,
             likes,
             tags,
             title 
            } = post
    
    
 
    return (
      
      <div className="max-w-screen-xl mx-auto">
          
          
      
          <main className="mt-10">
      
            <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{height:'24em'}}>
              <div className="absolute left-0 bottom-0 w-full h-full z-10 elquefalta"></div>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2092%2F1*auQuyyb6aV5HMiGpoJGZkQ.gif&f=1&nofb=1&ipt=af428c61d615477cbe7f6294ba7d5d40489a275122e3e133e43174b703b61b5d&ipo=images" className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
              <div className="p-4 absolute  z-20">
                  {
                      tags.map((tag, i)=> <p key={tag + i} className="ml-5 px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{tag}</p>)
                  }
                
                <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                  {title}
                </h2>
                <div className="flex mt-3">
                  <img src={avatarImg}
                    className="h-10 w-10 rounded-full mr-2 object-cover" />
                  <div>
                    <p className="font-semibold text-gray-200 text-sm"> { author } </p>
                    <p className="font-semibold text-gray-400 text-xs"> { date } </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
              {
                content
              }
            </div>
            <br />
          </main>
          <div className="w-full flex justify-evenly">
          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            
              <div className="absolute inset-0 w-3 bg-green-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white"> 🤙 ok 🤙</span>
            
          </button>

          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <Link href=''>
              <div className="absolute inset-0 w-3 bg-indigo-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">Volver  😎</span>
            </Link>
          </button>

          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            
              <div className="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black text-2xl group-hover:text-white">💩</span>
            
          </button>

          </div>
        </div>
    )
  }