'use client'

import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { Posti } from "../../../src/interfaces/PostiResponse";

interface Params {
    post:Posti
}

async function getPost(id:string) {
  const res  = await fetch(`http://localhost:8080/posts/${id}`)
  if (!res.ok) {
    throw 'upsi'
  }
  const data = await res.json()
  return data
 
}

async function savePost({author, avatarImg, content, date,id,likes,tags,title}:Posti) {

  const savePosti  = {
    title,
    content,
    tags,
    author,
    isPosted: true,
    avatarImg,
    date,
    likes
  }

 
  const res  = await axios.put(`http://localhost:8080/posts/${id}`, savePosti)
  console.log(res);

  return res
  
}

async function deletePost(id:string) {
  return await axios.delete(`http://localhost:8080/posts/${id}`)
}

export default function PostAdmin() {

  const [post, setPost] = useState<Posti|null>()
  const [id, setID] = useState<string>('')
  const router = useRouter()


    useEffect(()=>{
      
      console.log(window.location.pathname);
      setID(window.location.pathname)
      setTimeout(()=>{

        console.log(window.location.pathname.split('/')[2]);
        fetchData(window.location.pathname.split('/')[2])
      },100)
      
    },[])
    
    const fetchData = async id => {
      if (id !== '') {
        
        const post = await getPost(id) as Posti
  
        setPost(post)
      }

    }

    const handleSave = async () => {
        const res = await savePost(post as Posti)
      
        if (res.status === 200) {
          router.back()
        }
    }

    const handleDelete = async () => {
      const res = await deletePost(post?.id as string)
      
      if (res.status === 200) {
        router.back()
      }
    }
 
    return (
      
      
      <div className="max-w-screen-xl mx-auto">
          
          
      {

        post && <>
        
        <main className="mt-10">
      
            <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{height:'24em'}}>
              <div className="absolute left-0 bottom-0 w-full h-full z-10 elquefalta"></div>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2092%2F1*auQuyyb6aV5HMiGpoJGZkQ.gif&f=1&nofb=1&ipt=af428c61d615477cbe7f6294ba7d5d40489a275122e3e133e43174b703b61b5d&ipo=images" className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
              <div className="p-4 absolute  z-20">
                  {
                      post.tags.map((tag, i)=> <p key={tag + i} className="ml-5 px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{tag}</p>)
                  }
                
                <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                  {post.title}
                </h2>
                <div className="flex mt-3">
                  <img src={post.avatarImg}
                    className="h-10 w-10 rounded-full mr-2 object-cover" />
                  <div>
                    <p className="font-semibold text-gray-200 text-sm"> { post.author } </p>
                    <p className="font-semibold text-gray-400 text-xs"> { post.date } </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
              {
                post.content
              }
            </div>
            <br />
          </main>
          <div className="w-full flex justify-evenly">
          <button onClick={handleSave} className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            
              <div className="absolute inset-0 w-3 bg-green-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white"> 🤙 ok 🤙</span>
            
          </button>

          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <Link href=''>
              <div className="absolute inset-0 w-3 bg-indigo-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">Volver  😎</span>
            </Link>
          </button>

          <button onClick={handleDelete} className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            
              <div className="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black text-2xl group-hover:text-white">💩</span>
            
          </button> 

          </div>
        </>  
      }
        </div>
    )
  }