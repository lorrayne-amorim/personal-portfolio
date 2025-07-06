import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { FaReact, FaGithub, FaNodeJs, FaDocker, FaPython, FaJava, FaHtml5, FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Experiência prática com desenvolvimento web full stack, utilizando tecnologias como React, Node, Typescript e MongoDB. Também já atuei com ensino de programação e atendimento ao cliente, unindo técnica e boa comunicação na entrega de soluções digitais.</p>
                            <Carousel responsive={responsive} infinite={true} autoPlay={true}
                                autoPlaySpeed={1700} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <FaGithub size={120} />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <FaDocker size={120} />
                                    <h5>Docker</h5>
                                </div>
                                <div className="item">
                                    <FaReact size={120} />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <FaNodeJs size={120} />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <IoLogoJavascript size={120} />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <IoLogoCss3 size={120} />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <FaHtml5 size={120} />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <FaBootstrap size={120} />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <RiTailwindCssFill size={120} />
                                    <h5>Tailwind CSS</h5>
                                </div>
                                <div className="item">
                                    <FaPython size={120} />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <FaJava size={120} />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <SiMongodb size={120} />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <DiPostgresql size={120} />
                                    <h5>PostGreSQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
