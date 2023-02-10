'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import CardPost from './components/CardPost';
import { card } from './components/ItemsCard';
// import CardPost from './Posts/component/CardPost';
// import Login from './Login/page';



function App() {

  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {

    setInitialRenderComplete(true)

  }, [])

  if(!initialRenderComplete){
    return (<div>loading...</div>)
  }else{
  
  return (<div>
    {/* <Login/> */}

    <CardPost items={card}/>
      
    </div>
  )
  }
}

export default App
