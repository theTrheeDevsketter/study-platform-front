'use client'
import '../app/global.css'

import { UserProvider } from '@auth0/nextjs-auth0/client'

import LayoutFrame from './components/LayoutFrame'
import { AuthProvider } from './context/auth'

export default function RootLayout({children,}: {children: React.ReactNode}) {



  return (
    <html>
      
      <body className='bg-slate-50 w-full h-screen'>
    
        <UserProvider>
          <AuthProvider>
            <LayoutFrame>
                {children}
            </LayoutFrame>
          </AuthProvider>
        </UserProvider>
      </body>
     
    </html>
  )
}
