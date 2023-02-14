'use client'

import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import { UserProps } from "@auth0/nextjs-auth0/dist/client/with-page-auth-required";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from 'swr'

import Navbar from "./HamburguerMenu";
import Header from "./Header";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";
import SidebarMenu from "./SidebarMenu";

export default function LayoutFrame ({children,}: {children: React.ReactNode}){

  const {isLoading,user,error} = useUser()
  
  const fetcher = async (url:string) => {
    if (user) {
      
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "userName": user?.nickname,
        "avatar_url": user?.picture
      });
      
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };
      
      const res = await fetch(url, requestOptions)

      if (res.status === 201) {
        
        const data = await res.json()
        console.log(data);
        
      }
      


    }
    
  }
  const { data } = useSWR(()=> user && 'http://localhost:8080/users/', fetcher)

  
  return(
    <>

    <div className='m-auto flex justify-between items-center w-[100%] h-[5%] bg-indigo-500 p-2'>
            <div className="flex w-[90%] justify-between m-auto">
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
              <button className="z-90 absolute bottom-10 right-8 bg-indigo-500 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-indigo-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"> + </button>
          </div>
</>
    )
}