'use client'
import { NAVBAR_LINK } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Navbar = () => {
    const [scroll, setScroll] = React.useState(true)
    const [lastScrollY, setLastScrollY] = React.useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY) {
                setScroll(false)  
            }else{
                setScroll(true)  
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    useEffect(() => {
        if(scroll){
            setTimeout(() => {
                setScroll(false)
            }, 2000);
        }
    }, [scroll])

    return (
        <header className={`fixed top-0 left-0 w-full z-50 flex justify-center items-center py-4 ${scroll ? "translate-y-0" : "-translate-y-20 hover:translate-y-0"} transition-all duration-300`}>
            <nav className='flex gap-3 items-center bg-slate-800/70 backdrop-blur-md sm:px-6 px-4 py-1.5 rounded-xl'>
                <Link href={'/'}>
                    <Image src={'/images/logo.jpg'} alt='logo' width={50} height={50} className='size-9 bg-cover rounded-full' />
                </Link>
                {NAVBAR_LINK.map((link) => (
                    <Link href={link.href} key={link.id} className='sm:px-6 px-3 sm:py-2.5 py-1 sm:text-lg text-xs grid place-items-center hover:bg-white hover:bg-opacity-10 rounded-lg'>
                        <p className='text-white font-bold text-sm'>{link.title}</p>
                    </Link>
                ))}
            </nav>
        </header>
    )

}


export default Navbar
