import '../app/global.css'
import SidebarMenu from './components/SidebarMenu'
import Navbar from './components/HamburguerMenu'
import Header from './components/Header'
import LogInButton from './login/component/LogInButton'
import LogOutButton from './login/component/LogOutButton'
import { UserProvider } from '@auth0/nextjs-auth0/client'

export default function RootLayout({children,}: {children: React.ReactNode}) {

  return (
    <html>
      <head />
      <body className='bg-slate-50 flex w-full h-screen'>
      
        <UserProvider>
        <>

        <div className='flex items-center fixed w-full h-12 bg-indigo-500 p-2'>
          <div className='m-auto flex justify-between items-center w-[90%] lg:grid-cols-[20%_auto]  lg:max-w-6xl '>
            <Header/>
            <div className='w-[60%] flex justify-end items-center'>
              <div className='mx-2'><LogInButton/></div>
              <div className='mx-2'><LogOutButton/></div>
              <div><Navbar/></div>
            </div>
          </div>
        </div>
        
        <SidebarMenu/>
        <div className='m-auto w-[90%] h-[100vh] bg-white text-center leading-[40px] grid grid-cols-[0%_auto] lg:grid-cols-[20%_auto]  lg:max-w-6xl overflow-auto'>
            {children}
        </div>
        </>
        </UserProvider>
      </body>
    </html>
  )
}
