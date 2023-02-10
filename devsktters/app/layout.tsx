
import '../app/global.css'
import SidebarMenu from './components/SidebarMenu'
import Navbar from './components/HamburguerMenu'
import Header from './components/Header'
import LogInButton from './login/component/LogInButton'
import LogOutButton from './login/component/LogOutButton'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link'
import LayoutFrame from './components/LayoutFrame'

export default function RootLayout({children,}: {children: React.ReactNode}) {



  return (
    <html>
      <head />
      <body className='bg-slate-50 w-full h-screen'>
    
        <UserProvider>
        
          <LayoutFrame>
              {children}
          </LayoutFrame>
        
        </UserProvider>
      </body>
     
    </html>
  )
}
