'use client'
import gsap from 'gsap';
import './contact.css'
import { useEffect } from 'react';

const ContactCom = () =>{

  useEffect(() => {
    var tl = gsap.timeline({ paused: true });
    tl.to(".contectText", 0.5, {
        y: -50,
        opacity: 1,
    }).to(".contectDetails", 0.5, {
        x: -50,
        opacity: 1,
    }).to(".contactRight", 0.5, {
        y: -50,
        opacity: 1,
    });
    tl.play();
}, [])


    return (
        <>
        <div className="contactCom">
            <div className="contactLeft">
                <div className="contectText">
                    <p className='contactMe'>— Contact Me</p>
                    <h1>Get In Touch With Me</h1>
                    <p className='contactPara'>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert Factual knowledge is less prized when everything you ever need to know can be found at doing everything.</p>
                </div>
                <div className="contectDetails">
                    <div className="phone">
                        <div className="icon"><PhoneIcon/></div>
                        <div className="phoneNum">
                            <h1>Phone</h1>
                            <p className='detailpara'>+99 (0) 101 0000 888</p>
                            <p>+99 (0) 101 0000 777</p>
                        </div>
                    </div>
                    <div className="email">
                    <div className="icon"><EmailIcon/></div>
                        <div className="emaile">
                        <h1>Email</h1>
                        <p className='detailpara'>Info@yourdomain.com</p>
                        <p>Info@yourdomain.net</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactRight">
                <form action="">
                    <input className='firstInp' type="text" placeholder='Full Name'/>
                    <input className='secInp' type="email" placeholder='Email'/>
                    <textarea cols="30" rows="10" placeholder='Message*'></textarea>
                    <button type='submit'>Send To Me</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default ContactCom;

// Icons

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" height="35.007" viewBox="0 0 35 35.007">
      <defs>
        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#64f4ab"></stop>
          <stop offset="1" stopColor="#327a56"></stop>
        </linearGradient>
      </defs>
      <g id="phone_-_icon" dataName="phone - icon" transform="translate(-2 -2)">
        <path id="Path_106" dataName="Path 106" d="M9.833,2.007,9.784,2c-2.305-.109-5.557,2.664-6.76,4.668-1.318,1.8-1.344,4.194-.193,6.961l.182.417C6.049,21.523,17.435,32.9,24.879,36.009c2.848,1.332,5.386,1.357,7.386-.084,1.759-1,4.642-4.35,4.558-6.725a3.985,3.985,0,0,0-1.237-2.5l-.173-.17-.48-.445c-1.736-1.551-4.742-3.763-5.671-3.956a3.879,3.879,0,0,0-3,.618l-.436.249c-.83.478-1.127.56-1.519.417a15.514,15.514,0,0,1-8.8-8.871c-.112-.313-.056-.586.3-1.248L16,12.953a4.241,4.241,0,0,0,.8-3.348l-.044-.154a28.224,28.224,0,0,0-4.281-5.977l-.222-.226A3.95,3.95,0,0,0,9.831,2.005ZM9.64,4.562l.095.018a1.631,1.631,0,0,1,.583.352l.161.147.3.32a34.755,34.755,0,0,1,3.53,4.726c.07.345-.007.632-.38,1.309l-.2.345c-.823,1.441-1.076,2.368-.6,3.681A18.12,18.12,0,0,0,23.391,25.8a3.651,3.651,0,0,0,3.383-.4l.429-.243c.849-.49,1.16-.6,1.54-.518a34.8,34.8,0,0,1,4.894,3.73l.14.14a1.589,1.589,0,0,1,.5.847,5.005,5.005,0,0,1-1.427,2.568,13.288,13.288,0,0,1-1.876,1.8l-.088.056c-1.194.852-2.668.889-4.616.06l-.371-.166c-6.73-2.82-17.314-13.308-20.369-20.2l-.182-.425c-.947-2.1-1.026-3.627-.345-4.743l.137-.2c.788-1.306,3.163-3.361,4.346-3.518l.151-.009Zm14.1-2.135.173.007A14.848,14.848,0,0,1,37,15.57a1.276,1.276,0,0,1-2.531.285A12.3,12.3,0,0,0,23.634,4.979a1.281,1.281,0,0,1-.061-2.536l.17-.018Zm.105,6.051.172.021a8.815,8.815,0,0,1,6.947,6.986,1.274,1.274,0,0,1-2.5.49,6.259,6.259,0,0,0-4.934-4.96,1.28,1.28,0,0,1,.147-2.534l.168,0Z" transform="translate(0 0)" fillRule="evenodd" fill="url(#linear-gradient)"></path>
      </g>
    </svg>
  );
  

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" height="31.501" viewBox="0 0 35 31.501">
      <defs>
        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#64f4ab"></stop>
          <stop offset="1" stopColor="#327a56"></stop>
        </linearGradient>
      </defs>
      <g id="email_-_icon" dataName="email - icon" transform="translate(-2 -3)">
        <path id="Path_105" dataName="Path 105" d="M27.42,3H11.548C6,3,2,7.484,2,13.254V24.248C2,30.02,6,34.5,11.548,34.5H27.4a9.664,9.664,0,0,0,7-3.1,9.8,9.8,0,0,0,2.583-7.23l0-10.915A9.724,9.724,0,0,0,27.42,3ZM11.548,5.674H27.39a7.009,7.009,0,0,1,5.066,2.254,7.112,7.112,0,0,1,1.876,5.247l0,11.073a7.17,7.17,0,0,1-1.873,5.326,7.009,7.009,0,0,1-5.066,2.254H11.548c-4.013,0-6.894-3.227-6.894-7.58V13.254c0-4.352,2.881-7.578,6.9-7.578Zm18.495,7.193a1.321,1.321,0,0,0-1.866-.208L21,18.443l-.2.145a2.415,2.415,0,0,1-2.767-.156L10.8,12.657l-.161-.112a1.321,1.321,0,0,0-1.7.327,1.344,1.344,0,0,0,.214,1.88l7.237,5.784.282.2a5.058,5.058,0,0,0,5.978-.2l7.188-5.795.144-.135a1.344,1.344,0,0,0,.063-1.747Z" fillRule="evenodd" fill="url(#linear-gradient)"></path>
      </g>
    </svg>
  );