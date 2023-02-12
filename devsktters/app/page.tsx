// import React, { useEffect, useState } from 'react'
import CardPost from './components/CardPost';
// import CardPost from './Posts/component/CardPost';
// import Login from './Login/page';

export const metadata = {
  title: 'Devsketter'
}


function App() {


  
  return (
  <div>

  {/* @ts-expect-error Server Component  */}
    <CardPost/>
  </div>
  )
  
}

export default App
