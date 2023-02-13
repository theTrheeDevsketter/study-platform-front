"use client";
import React, { useEffect, useState } from 'react'

import SunEditorComponent from './component/SunEditor';

import { Posti } from '../../src/interfaces/PostiResponse';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function PostDetail() {

  const [data, setData] = useState("");

  const { isLoading, user, error } = useUser();

  const save = () => {

    let date: Date = new Date();

    const post: Posti = {
      author: user?.name as string,
      title: "Post de prueba",
      content: data,
      tags: ["Etiqueta", "Etiqueta"],
      isPosted: false,
      avatarImg: user?.picture as string,
      date: date.toLocaleString(),
      likes: 0
    };

    savePost(post);
  }

  async function savePost(post: Posti) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(post);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'no-cors'
    };

    fetch("http://localhost:8080/posts/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // console.log(JSON.stringify(post));

    // let res = await fetch(`http://localhost:8080/posts`, {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(post)
    // })

    // if (!res.ok) {
    //   throw 'upsi'
    // }
    // const resData = await res.json()

    // console.log(resData);
    // return resData

  }


  const [isloaded, setIsloaded] = useState(false);


  useEffect(() => {
    setIsloaded(true);
  }, []);


  return (

    <div className="flex-col bg-white shadow-lg rounded-lg mx-auto mt-[50px] max-w-sm md:max-w-4xl ">

      <SunEditorComponent
        value={data}
        isloaded={isloaded}
        setData={setData}
      />


      <button className="group my-5 relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
        onClick={save}>
        <div className="absolute inset-0 w-3 bg-indigo-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white">Guardar  🤓</span>
      </button>


    </div>

  )
}
