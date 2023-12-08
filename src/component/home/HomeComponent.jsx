import Image from "next/image";
import Link from "next/link";
import './home.css'


const HomeComponent = () => {
    return (
        <>
            <div className="HomeCom">
                <div className="homeLeft">
                    <div className="intro">— Introducing</div>
                    <div className="">
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
                    <Image src={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/hero-img.png'} width='550' height='800' />
                    <div className="designBox">
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