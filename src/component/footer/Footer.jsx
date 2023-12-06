import Link from 'next/link'
import './footer.css'
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";


export const Footer = () => {
  return (
    <>
      <div className="footer">
          <div className="logo">
            <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg" alt="logo" />
          </div>
          <p className='footerpara'>© 2023 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</p>
        <div className="footerIcons">
          <Link className='footerIcon' target="_blank" href={'/portfolio'}>F</Link>
          <Link className='footerIcon' target="_blank" href={'/portfolio'}><FaLinkedinIn /></Link>
          <Link className='footerIcon' target="_blank" href={'/portfolio'}><FaInstagram /></Link>
          <Link className='footerIcon' target="_blank" href={'/portfolio'}><FaBehance /></Link>
        </div>
      </div>
    </>
  )
}