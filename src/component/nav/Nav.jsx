'use client'
import Link from 'next/link'
import './nav.css'
import { RiGlobalLine } from "react-icons/ri";
import { LiaBarsSolid } from "react-icons/lia";
import { RxCrossCircled } from "react-icons/rx";
import { useEffect, useState } from 'react';
import gsap from 'gsap';


export const Nav = () => {

    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const toggleHandler = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        var tl = gsap.timeline({ paused: true });

        tl.to(".logo", 1, {
            x: 50,
            opacity: 1,
        }).to(".navContent", {
            opacity: 1,
        }, "same").to(".navIcon", {
            x: -50,
            opacity: 1,
        }, "same").to(".navContactBtn", 0.8, {
            x: -50,
            opacity: 1,
        })
        tl.play();
    }, [toggle])

    useEffect(() => {
        setActiveLink(window.location.pathname);
        console.log(activeLink)
    }, []);

    return (
        <>
            <div className="navbar">
                <div className="navLeft">
                    <div className="logo">
                        <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg" alt="logo" />
                    </div>
                    <div className={`navContent ${toggle ? 'toggle' : ''}`}>
                        <a href={'/'} className={activeLink === '/' ? 'active' : ''}>Home</a>
                        <a href={'/portfolio'} className={activeLink === '/portfolio' ? 'active' : ''}>Portfolio</a>
                        <a href={'/contact'} className={activeLink === '/contact' ? 'active' : ''}>Contact</a>                    </div>
                </div>

                <div className="navRight">
                    <div>
                        < RxCrossCircled onClick={toggleHandler} className={`cross ${toggle ? 'crossActive' : ''}`} />
                        <LiaBarsSolid onClick={toggleHandler} className='barIcon' />
                    </div>
                    <a className='navIcon' href={'/contact'}><RiGlobalLine /></a>
                    <a className='navContactBtn' href={'/contact'}>Contact Me</a>
                </div>
            </div>
        </>
    )
}