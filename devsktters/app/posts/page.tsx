"use client";
import React, { useEffect, useState } from 'react'
// import CreateEditPost from './component/CreateEdit'

import dynamic from 'next/dynamic';
import { NextPage } from 'next';

// const CreateEdit = dynamic(() => import('./component/CreateEdit'),
// {
//   ssr: false
// })





import SunEditorComponent from './component/SunEditor';

export default function PostDetail() {

  const onChange = (data: any) => {
    console.log(data);
  }


  const [isloaded, setIsloaded] = useState(false);


  useEffect(() => {
    setIsloaded(true);
  }, []);


  return (
    <div>
      <SunEditorComponent
        placeholder="" 
        value="" 
        onchange={onchange} 
        isloaded={isloaded}
      />
    </div>
  )
}
