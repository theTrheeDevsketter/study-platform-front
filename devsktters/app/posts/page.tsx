"use client";
import React from 'react'
// import CreateEditPost from './component/CreateEdit'

import dynamic from 'next/dynamic';
import { NextPage } from 'next';

const CreateEdit = dynamic(() => import('./component/CreateEdit'),
{
  ssr: false
})

import SunEditorComponent from './component/SunEditor';

interface Props {}

const PostDetail: NextPage<Props> = (props): JSX.Element =>  {
  return (
    
      <SunEditorComponent/>
    
  )
}

export default PostDetail