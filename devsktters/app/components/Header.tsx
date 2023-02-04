import Link from 'next/link'
import React from 'react'


function Header() {

  return (
    <header>
      <Link href="/"><img src='/assets/logodev.png' className='h-7'/></Link>
        
    </header>
  )
}

export default Header