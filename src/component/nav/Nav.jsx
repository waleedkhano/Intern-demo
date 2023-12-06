import Link from 'next/link'
import './nav.css'
import { RiGlobalLine } from "react-icons/ri";


export const Nav = () => {
    return (
        <>
            <div className="navbar">
                <div className="navLeft">
                    <div className="logo">
                        <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg" alt="logo" />
                    </div>
                    <div className="navContent">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/portfolio'}>Portfolio</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                </div>
                <div className="navRight">
                    <Link className='navIcon'  href={'/contact'}><RiGlobalLine /></Link>
                    <Link className='navContactBtn' href={'/contact'}>Contact Me</Link>
                </div>
            </div>
        </>
    )
}