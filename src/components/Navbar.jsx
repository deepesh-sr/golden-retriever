import React, { useState } from 'react'
import { navLinks } from '../constants';

const NavItems = () => {
    return (
        <ul className='flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20'>
            {navLinks.map((items) => (
                <li key={items.id}>
                    <a href="href" className='text-lg md:text-base text-neutral-400 hover:text-white transition-colorstext-lg transition-colors'
                        onClick={() => { }}>
                        {items.name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export const Navbar = () => {

    // creating useState for the menu
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        // isOpen ? setIsOpen(false) : setIsOpen(true) // approach one
        setIsOpen((prevvIsOpen) => !prevvIsOpen)
    }
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between item-center py-5 mx-auto sm:px-10 px-5sm:px-10 px-5'>
                    <a href="/" className='text-neutral-400 font-bold text-xl hover::text-white transition-colors'>Deepesh</a>
                    <button onClick={toggleMenu}
                    className='text-neutral-400 hover::text-white focus:outline-name sm:hidden flex' aria-label='Toggle Menu'
                    >
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6' />
                    </button>
                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={
                `absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen' : 'max-h-0'}`
            }>
                <nav className='p-5'>
                    <NavItems/>
                </nav>
            </div>
        </header>
    )
}