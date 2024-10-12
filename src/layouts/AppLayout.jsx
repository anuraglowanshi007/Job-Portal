
import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
       <div className="grid-background"></div>
       <main className='min-h-screen container ml-10 mr-10'>
        <Header />
        <Outlet />
       </main>
       <div className='p-10 text-center bg-gray-800 mt-10'>
        Made by Anurag
        </div>
    </div>
   
  )
}

export default AppLayout