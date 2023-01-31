import '../app/global.css'
import Navbar from './components/HamburguerMenu'
import Header from './components/Header'
import LogInButton from './Login/component/LogInButton'
import LogOutButton from './Login/component/LogOutButton'

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html>
      <head />
      <body className='bg-gray-100 flex w-full h-screen'>
        <div className='flex items-center fixed w-full h-12 bg-gradient-to-br from-orange-400 p-2'>
          <div className='m-auto flex justify-between items-center w-[90%] lg:grid-cols-[20%_auto]  lg:max-w-6xl '>
            <Header/>
            <div className='w-[60%] flex justify-end items-center'>
              <div className='mx-2'><LogInButton/></div>
              <div className='mx-2'><LogOutButton/></div>
              <div><Navbar/></div>
            </div>
          </div>
        </div>
        
        <div className='m-auto mt-[50px] w-[90%] h-[100vh] bg-white text-center leading-[40px] grid grid-cols-[auto] lg:grid-cols-[20%_auto]  lg:max-w-6xl border-solid border-[4px]'>
            <ul className="DESKTOP-MENU hidden my-10 lg:flex flex-col">
                <li><a href="/about">😎About</a></li>
                <li><a href="/portfolio">🚀Portfolio</a></li>
                <li><a href="/contact">🐥Contact</a></li>
            </ul>
           
            
              
            {children}
        </div>
      </body>
    </html>
  )
}
