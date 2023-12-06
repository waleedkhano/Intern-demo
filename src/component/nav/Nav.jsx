'use client'
import Link from 'next/link'
import './nav.css'
import { RiGlobalLine } from "react-icons/ri";
import { LiaBarsSolid } from "react-icons/lia";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from 'react';


export const Nav = () => {

    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className="navbar">
                <div className="navLeft">
                    <div className="logo">
                        <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg" alt="logo" />
                    </div>
                    <div className={`navContent ${toggle ? 'toggle' : ''}`}>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/portfolio'}>Portfolio</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                </div>
               
                <div className="navRight">
                <div>
                    < RxCrossCircled onClick={toggleHandler} className={`cross ${toggle ? 'crossActive' : ''}`}/>
                <LiaBarsSolid onClick={toggleHandler} className='barIcon' />
                </div>
                    <Link className='navIcon'  href={'/contact'}><RiGlobalLine /></Link>
                    <Link className='navContactBtn' href={'/contact'}>Contact Me</Link>
                </div>
            </div>
        </>
    )
}