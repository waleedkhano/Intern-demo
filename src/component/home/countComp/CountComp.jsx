'use client';
import { useEffect, useRef } from 'react';
import './countComp.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CountComp = () => {
    const component = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.countContainer',
                    start: '90% bottom',
                    end: 'bottom center',
                    // markers: true,
                },
            });

            // Add counting animations
            const countAnimation = (target, endValue) => {
                gsap.to(target, {
                    duration: 1,
                    innerHTML: Math.round(endValue).toFixed(0), // Convert to integer string
                    ease: 'power4.out',
                });
            };


            tl.to('.clients', 0.5, {
                y: -70,
                opacity: 1,
                onComplete: () => countAnimation('.clients h1', 56),
            })
                .to('.projects', 0.5, {
                    y: -70,
                    opacity: 1,
                    onComplete: () => countAnimation('.projects h1', 87),
                })
                .to('.awards', 0.5, {
                    y: -70,
                    opacity: 1,
                    onCompleteParams: ['.awards h1', 16],
                    onComplete: countAnimation,
                })
                .to('.experience', 0.5, {
                    y: -70,
                    opacity: 1,
                    onCompleteParams: ['.experience h1', 7],
                    onComplete: countAnimation,
                });
        }, component.current);
        return () => ctx.revert();
    }, []);


    useEffect(() => {
        let ctx = gsap.context(() => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".count",
                    start: "90% bottom",
                    end: "bottom 30%",
                    scrub: true,
                    // markers: true
                }
            })
            tl.to(".circleYellow2", 1.5, {
                x: -220,
                ease: 3
            }).to(".circleYellows", 1.5, {
                x: 200,
                ease: 3
            })

        }, component.current);
        return () => ctx.revert();

    }, [])


    return (
        <div ref={component} className='count'>
            <div className="circleParent"><div className="circleYellows"></div></div>
            <div className="circleParent"><div className="circleYellow2"></div></div>
            <div className="countContainer">
                <div className="devBox roundStart">
                    <div className="clients">
                        <h1>0</h1>
                        <p>Happy Clients</p>
                    </div>
                </div>
                <div className="devBox">
                    <div className="projects">
                        <h1>0</h1>
                        <p>Projects Done</p>
                    </div>
                </div>
                <div className="devBox">
                    <div className="awards">
                        <h1>0</h1>
                        <p>Awards Winning</p>
                    </div>
                </div>
                <div className="devBox roundEnd">
                    <div className="experience">
                        <h1>0</h1>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountComp;
