import '../app/global.css'

import { UserProvider } from '@auth0/nextjs-auth0/client'

import LayoutFrame from './components/LayoutFrame'

export default function RootLayout({children,}: {children: React.ReactNode}) {



  return (
    <html>
      
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
