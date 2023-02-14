"use client";
import React, { use, useEffect, useState } from 'react'

import SunEditorComponent from './component/SunEditor';

import { Posti } from '../../src/interfaces/PostiResponse';
import { useUser } from '@auth0/nextjs-auth0/client';

import axios from 'axios';
import Saved from './component/Saved';
import TagsDropdown from './component/TagsDropdown';
import { throws } from 'assert';
import { text } from 'stream/consumers';
import { Tags, TagsArray } from '../../src/interfaces/Tags';



export default function PostDetail() {

  const [content, setcontent] = useState("");

  const { isLoading, user, error } = useUser();

  const [isloaded, setIsloaded] = useState(false);

  const [isSaved, setIsSaved] = useState(false);

  const [selectedTags, setSelectedTags] = useState<Tags[]>([])

  const [title, setTitle] =  useState('');



  const save = () => {

    let date: Date = new Date();

    const tagsNames: string[] = [];

    selectedTags.forEach((item) => tagsNames.push(item.name))

    // selectedTags.map((item) => {item.name})

    const post: Posti = {
      author: user?.nickname as string,
      title: title,
      content: content,
      tags: tagsNames ,
      isPosted: false,
      avatarImg: user?.picture as string,
      date: date.toLocaleString(),
      likes: 0
    };

    sendPost(post);

  }

  async function  sendPost(post: Posti) {

    try{

      const res = await axios.post('http://localhost:8080/posts/', post);

      if(res.status !== 201) throw 'Ha ocurrido un error, contacte con el administrador';

    }catch(err: any){
      throw 'Ha ocurrido un error, contacte con el administrador: ' + err;
    }
    setIsSaved(!isSaved);
  }


  useEffect(() => {
    setIsloaded(true);
  }, []);


  return (

    <div className="flex-col bg-white shadow-lg rounded-lg mx-auto mt-[50px] max-w-sm md:max-w-4xl ">
      {!isSaved ?

      <div>

        <div className='my-5 w-full border-2 h-96'>
        <label key='title' className='mr-3 text-2xl'>Título</label>
        <input id='title' type="text" className='border-2 rounded border-gray-200 w-full' onChange={(e) => setTitle(e.target.value)} value={title}></input>


        <TagsDropdown selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
        

        </div>

        


        <SunEditorComponent
        value={content}
        isloaded={isloaded}
        setData={setcontent}
        />

        <button className="group my-5 relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
        onClick={save}>
        <div className="absolute inset-0 w-3 bg-indigo-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white">Guardar  🤓</span>
        </button>

      </div>
      :
      <Saved 
      name={user?.name} 
      />
      }


    </div>

  )
}
