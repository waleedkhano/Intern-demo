'use client'
import Link from 'next/link';
import './secHome.css'
import { IconDesignIcon, LogoDesignIcon, ProductDesignIcon } from './Icons';
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortfolioCom from '../portfolioCom/PortfolioCom';
import PortfolioCom2 from '../portfolioCom/PortfolioCom2';
import CountComp from './countComp/CountComp';
import LastComp from './lastComp/LastComp';
gsap.registerPlugin(ScrollTrigger);


const HomeSecComp = () => {
    const component = useRef(null);


    useEffect(() => {

        let ctx = gsap.context(() => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".secHome",
                    start: "40% bottom",
                    end: "bottom center",
                }
            })
            tl.to(".secLeft", 1, {
                y: -70,
                opacity: 1,
            }, "same").to(".product", {
                scale: 1,
                opacity: 1,
            }, "same").to(".logoicon", {
                scale: 1,
                opacity: 1,
            }).to(".ui", {
                scale: 1,
                opacity: 1,
            }).to(".icon", {
                scale: 1,
                opacity: 1,
            })

        }, component.current);
        return () => ctx.revert();

    }, [])
    useEffect(() => {
        let ctx = gsap.context(() => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".projectsOnHome",
                    start: "40% bottom",
                    end: "bottom center",
                    scrub: true,
                }
            })
            tl.to(".circleGreen", 1, {
                x: -220,
                ease: 3
            }).to(".circleYellow", 1, {
                x: 200,
                ease: 3

            })

        }, component.current);
        return () => ctx.revert();

    }, [])

    return (
        <>
            <div className="secHome">
                <div className="secLeft">
                    <p className='skill'>— My Skills</p>
                    <h1>Why Hire Me For Next <br /> Project?</h1>
                    <p className='secHomePara'>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                    <div className="secBtn"><Link href={'#'}>Download CV</Link></div>
                </div>
                <div className="secRight">
                    <div className="">
                        <div className="secbox product">
                            <div className="iconCircle">
                                <ProductDesignIcon />
                            </div>
                            <h1>Product Design</h1>
                            <p>The technological revolution is <br /> changing aspect</p>
                        </div>
                        <div className="secbox ui">
                            <div className="iconCircle">
                                <IconDesignIcon />
                            </div>
                            <h1>UI Design</h1>
                            <p>The technological revolution is <br /> changing aspect</p>
                        </div>

                    </div>
                    <div className="">
                        <div className="secbox logoicon">
                            <div className="iconCircle">
                                <LogoDesignIcon />
                            </div>
                            <h1>Logo Design</h1>
                            <p>The technological revolution is <br /> changing aspect</p>
                        </div>
                        <div className="secbox icon">
                            <div className="iconCircle">
                                <IconDesignIcon />
                            </div>
                            <h1>Icon Design</h1>
                            <p>The technological revolution is <br /> changing aspect</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="projectsOnHome">
                <div className="portfolioProject1">
                    <PortfolioCom
                        project={"1"}
                        projectHeading={'Branding Nice Studio'}
                        projectPara={' The technological revolution is changing aspect of our lives, and the fabric of society itself. its also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There no imperative to be an expert at doing everything when you can.'}
                        photo={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-1-img.jpg'}
                    />
                </div>
                <div className="circleParent"><div className="circleGreen"></div></div>
                <div className="portfolioProject2">
                    <PortfolioCom2
                        project={"2"}
                        projectHeading={'Mobile Card App'}
                        projectPara={' I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because those who do not know how to pursue pleasure rationally '}
                        photo={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-2-img.jpg'}
                    />
                </div>
                <div className="circleParent"><div className="circleYellow"></div></div>
                <div className="portfolioProject3">
                    <PortfolioCom
                        project={"3"}
                        projectHeading={'Restaurant Landing page'}
                        projectPara={'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because those who do not know how to pursue pleasure rationally'}
                        photo={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-3-img.jpg'}
                    />
                </div>
                <div className="view"><Link href={'/portfolio'}>View All</Link></div>
            </div>
            <div className="lastComp">
                <CountComp />
                <LastComp/>
            </div>
        </>
    )
}

export default HomeSecComp;