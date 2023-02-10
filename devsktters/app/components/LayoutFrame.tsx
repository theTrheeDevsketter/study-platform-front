'use client'

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

import Navbar from "./HamburguerMenu";
import Header from "./Header";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";
import SidebarMenu from "./SidebarMenu";

export default function LayoutFrame ({children,}: {children: React.ReactNode}){

  const {isLoading,user,error} = useUser()

    return(
    <>

    <div className='m-auto flex justify-between items-center w-[90%] h-[5%] bg-indigo-500 p-2'>
              <Header/>
              <div className='w-[60%] flex justify-end items-center'>
                  {
                    user 
                    ? <div className='mx-2'><LogOutButton/></div>
                    : <div className='mx-2'><LogInButton/></div>

                  }
                   
                
                
                <div><Navbar/></div>
              </div>
          </div>
          <div className='m-auto relative bg-white text-center leading-[40px] w-[90%] h-[95%] grid grid-cols-[0%_auto] lg:grid-cols-[20%_auto] lg:max-w-6xl overflow-auto'>
              <div className='h-full'>
                <SidebarMenu/>
              </div>
              <div className='w-full h-full overflow-auto py-10'>
                {children}
              </div>
              {
              user && 
// TODO HACER COMPONENTE DE ESTO
              <Link href={"/posts"}>
                <button className="z-90 absolute bottom-10 right-8 bg-indigo-500 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-indigo-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"> + </button>
              </Link>
              }
          </div>
</>
    )
}