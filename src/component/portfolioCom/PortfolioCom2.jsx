'use client'
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightFill } from "react-icons/ri";
import './portfolioCom2.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const PortfolioCom2 = ({ project, projectHeading, projectPara, photo }) => {

    const component = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: component.current,
                    start: "40% bottom",
                    end: "bottom center",
                }
            })
            tl.to(".aniport2", 1, {
                y: -70,
                opacity: 1,
            }).to(".link2", 1,{
                x: 50,
                opacity: 1,
            })

        }, component.current);
        return () => ctx.revert();
    }, [])

    useEffect(() => {
        let ctx = gsap.context(() => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: component.current,
                    start: "40% bottom",
                    end: "bottom center",
                    scrub: true
                }
            })
            tl.to(".portfolioRight2 img", 1, {
                rotate: '0deg',
                ease: 3,
            })

        }, component.current);
        return () => ctx.revert();
    }, [])



    return (
        <>
            <div ref={component} className="portfolioContainer2">
            <div className="portfolioRight2">
                    <div className="imgBackground2"></div>
                    <Image src={photo} width={'400'} height={'350'} alt="portfolioImg" />
                </div>
                <div className="portfolioLeft2">
                    <div className="aniport2">
                        <p className="smallSpan2">— Project {project}</p>
                        <h1>{projectHeading}</h1>
                        <p className="portfolioPara2">{projectPara}</p>
                    </div>
                    <Link className="link2" href={'#'}><RiArrowRightFill className="arrowIc" /> <span>Read More</span></Link>
                </div>
             
            </div>
        </>
    )
}

export default PortfolioCom2;