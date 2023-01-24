import '../app/global.css'
import Navbar from './components/HamburguerMenu'
import Header from './components/Header'

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html>
      <head />
      <body className='bg-gray-100 flex'>
        <div className='flex justify-between items-center fixed w-full bg-orange-500 p-2'>
          <Header/>
          <div>
            <Navbar/>
          </div>
       
        </div>
        
        <div className='m-auto mt-[40px] w-[90%] h-[100vh] bg-white text-center leading-[40px] grid grid-cols-[auto] lg:grid-cols-[20%_auto]  lg:max-w-6xl border-solid border-[4px]'>
            <ul className="DESKTOP-MENU hidden lg:flex flex-col">
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
