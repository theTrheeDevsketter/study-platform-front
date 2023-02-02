'use client';
import Link from 'next/link';
import React from 'react'
import CardPost from './components/CardPost';
// import CardPost from './Posts/component/CardPost';
// import Login from './Login/page';



function App() {
  
  return (<div>
    {/* <Login/> */}

    <Link href="/posts"><CardPost/></Link>
      
    </div>
  )
}

export default App
