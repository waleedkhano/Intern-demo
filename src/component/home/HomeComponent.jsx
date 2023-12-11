'use client'
import Image from "next/image";
import Link from "next/link";
import './home.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";


const HomeComponent = () => {

    const component = useRef(null);


    useEffect(() => {
        var tl = gsap.timeline({ paused: true });
        tl.to(".circle", 1.5, {
            scale: 1,
            opacity: 1,
        }).to(".textani", 1, {
            y: 50,
            opacity: 1,
        }, "same").to(".homeBtn", 1, {
            y: -50,
            opacity: 1,
        }, "same2").to(".homeRight img", 1, {
            y: -400,
            opacity: 1,
        }, "same").to(".id", 0.3, {
            opacity: 1,
            scale: 1,
        }, "same").to(".ps", 0.5, {
            opacity: 1,
            scale: 1,
        }, "same").to(".ai", 0.7, {
            opacity: 1,
            scale: 1,
        }, "same2").to(".xd", 0.9, {
            opacity: 1,
            scale: 1,
        }, "same2")
        tl.play();
    }, [])

    useEffect(() => {

        let ctx = gsap.context(() => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".homeRight",
                    start: "10% bottom",
                    end: "bottom top",
                    scrub: true,
                    markers: true
                }
            })
            tl.to(".id", {
                x: -170,
                duration: 0.5,
            }, "same").to(".ps", {
                x: 170,
                duration: 0.5,
            }, "same").to(".ai", {
                x: -170,
                duration: 0.5,
            }, "same").to(".xd", {
                x: 170,
                duration: 0.5,
            }, "same")

        }, component.current);
        return () => ctx.revert();

    }, [])


    return (
        <>
            <div className="HomeCom">
                <div className="homeLeft">
                    <div className="textani">
                        <div className="intro">— Introducing</div>
                        <h1 className="homeHeading"><span>Hello</span> <br /> I'm Jessy <br /> Walter</h1>
                        <p className="homePara">Since beginning my journey as a freelance designer <br />
                            nearby 7 years ago, I 've done remote work for <br />
                            agencies, consulted for startup, and collaborated with <br />
                            talented people to create digital products.
                        </p>
                    </div>
                    <div className="homeBtn">
                        <Link href={'/contact'}>Contact Me</Link>
                    </div>
                </div>
                <div className="homeRight">
                    <div className="circle"></div>
                    <Image src={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/hero-img.png'} width='500' height='740' />
                    <div ref={component} className="designBox">
                        <div className="box id">Id</div>
                        <div className="box ps">Ps</div>
                        <div className="box xd">Xd</div>
                        <div className="box ai">Ai</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent;