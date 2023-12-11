'use client'
import PortfolioCom from "@/component/portfolioCom/PortfolioCom";
import PortfolioCom2 from "@/component/portfolioCom/PortfolioCom2";
import './portfolio.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


const page = () => {

    const component = useRef();
    const project1 = useRef();
    const project2 = useRef();
    const project3 = useRef();
    const project4 = useRef();
    const project5 = useRef();
    const project6 = useRef();
    const project7 = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".portfolioProjects",
                    start: "15% bottom",
                    end: "bottom center",
                    scrub: true,
                    markers: true
                }
            })
            tl.to(project1.current, {
                x: -220,
                ease: 3
            }).to(project2.current, {
                x: 200,
                ease: 3
            }).to(project3.current, {
                x: -220,
                ease: 3
            }).to(project4.current, {
                x: 200,
                ease: 3
            }).to(project5.current, {
                x: -220,
                ease: 3
            }).to(project6.current, {
                x: 220,
                ease: 3
            })

        }, component.current);
        return () => ctx.revert();

    }, [])

    return (
        <>
            <div ref={component} className="portfolioProjects">
                <div className="projectsOnHome">
                    <div className="portfolioProject1">
                        <PortfolioCom
                            project={"1"}
                            projectHeading={'Branding Nice Studio'}
                            projectPara={' The technological revolution is changing aspect of our lives, and the fabric of society itself. its also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There no imperative to be an expert at doing everything when you can.'}
                            photo={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-1-img.jpg'}
                        />
                    </div>
                    <div className="circleParent"><div ref={project1} className="circleGreen"></div></div>
                    <div className="portfolioProject2">
                        <PortfolioCom2
                            project={"2"}
                            projectHeading={'Mobile Card App'}
                            projectPara={' I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because those who do not know how to pursue pleasure rationally '}
                            photo={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-2-img.jpg'}
                        />
                    </div>
                    <div className="circleParent"><div ref={project2} className="circleYellow"></div></div>
                    <div className="portfolioProject3">
                        <PortfolioCom
                            project={"3"}
                            projectHeading={'Restaurant Landing page'}
                            projectPara={'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because those who do not know how to pursue pleasure rationally'}
                            photo={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-3-img.jpg'}
                        />
                    </div>
                    <div className="circleParent"><div ref={project3} className="circleGreen"></div></div>
                    <div className="portfolioProject2">
                        <PortfolioCom2
                            project={"4"}
                            projectHeading={'Essential UI Icon Pack'}
                            projectPara={' I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because those who do not know how to pursue pleasure rationally'}
                            photo={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-4-img.jpg'}
                        />
                    </div>
                    <div className="circleParent"><div ref={project4} className="circleYellow"></div></div>
                    <div className="portfolioProject3">
                        <PortfolioCom
                            project={"5"}
                            projectHeading={'Financial App Design'}
                            projectPara={'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because those who do not know how to pursue pleasure rationally'}
                            photo={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-5-img.jpg'}
                        />
                    </div>
                    <div className="circleParent"><div ref={project5} className="circleGreen"></div></div>
                    <div className="portfolioProject2">
                        <PortfolioCom2
                            project={"6"}
                            projectHeading={'Design Brand guidelines'}
                            projectPara={'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because those who do not know how to pursue pleasure rationally'}
                            photo={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-6-img.jpg'}
                        />
                    </div>
                    <div className="circleParent"><div ref={project6} className="circleYellow"></div></div>
                    <div className="portfolioProject3">
                        <PortfolioCom
                            project={"7"}
                            projectHeading={'Flight Booking App'}
                            projectPara={'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because those who do not know how to pursue pleasure rationally'}
                            photo={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-7-img.jpg'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;