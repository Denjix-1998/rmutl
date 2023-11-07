import React from 'react'
import Link from 'next/link'
import Index from '@/pages/product' 
import Image from 'next/image'
import bgImg from '../public/logo.png'


export default function Navbar() {
  return (
    <nav>  
        <div className='logo'>
            <Image src={bgImg} width={50} height={50} alt='logo'/>
        </div>
        <Link href="/">หน้าแรก</Link> 
        
       
    </nav>
  )
}
