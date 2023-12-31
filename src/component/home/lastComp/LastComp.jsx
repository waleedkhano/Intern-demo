'use client'

import React, { useEffect, useState } from 'react';
import Cards from './Card';
import './lastComp.css';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const LastComp = () => {
    const [activeCard, setActiveCard] = useState(1);

    const handleCircleClick = (cardNumber) => {
        setActiveCard(cardNumber);
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".cardsCom",
                    start: "center center",
                    end: "bottom -50%",
                }
            })
            tl.to(".lastCom", 1,{
                opacity: 1,
                scale: 1
            }).to(".lastCircle", 0.5,{
                opacity: 1,
            },"same").to(".lastCircle2", 0.5,{
                opacity: 1,
            },"same").to(".lastText", {
                opacity: 1,
                y: -25
            })

        });
        return () => ctx.revert();

    }, [])

    return (
        <>
            <div className="cardsCom">
                <div className="cardbox">
                    {activeCard === 1 && (
                        <div className={`card-from-left ${activeCard === 1 ? 'active2' : ''}`}>
                            <Cards
                                CardText={
                                    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!'
                                }
                                CardName={'Jared Warner'}
                                CardRink={'CEO of Figma'}
                                img={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/testimonials-img.jpg'}
                            />
                        </div>
                    )}
                    {activeCard === 2 && (
                        <div className={`card-from-right ${activeCard === 2 ? 'active' : ''}`} >
                            <Cards
                                CardText={
                                    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!'
                                }
                                CardName={'Amman Payne'}
                                CardRink={'CEO of Figma'}
                                img={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/07/testi21.png'}
                            />
                        </div>
                    )}
                </div>
                <div className="divCirlce">
                    <div className="divCircle2">
                        <div className={`circle1 ${activeCard === 1 ? 'yellowCircle' : ''}`} onClick={() => handleCircleClick(1)}></div>
                        <div className={`circle2 ${activeCard === 2 ? 'yellowCircle' : ''}`} onClick={() => handleCircleClick(2)}></div>
                    </div>
                </div>
                <div className="lastCom">
                    <div className="lastComChild">
                        <div className="lastCircle"></div>
                        <div className="lastCircle2"></div>
                        <div className="lastText">
                            <p className='lastLine'>——</p>
                            <h1>Lets Work Together</h1>
                            <p className='lastPara'>The technological revolution is changing aspect of our lives, and the fabric of society itself. it&apos;s also changing the way we learn and what we learn</p>
                            <Link href={'/contact'}>Contact Me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LastComp;
