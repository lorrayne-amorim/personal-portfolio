import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import evento from "../assets/img/evento.JPG"
import ecoveiculos from "../assets/img/ecoveiculos.JPG";
import medlink from "../assets/img/medlink.JPG"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Loja de Veículos",
            description: "Desenvolvimento WordPress",
            imgUrl: ecoveiculos,
            Link: 'https://ecoveiculos.com.br'
        },
        {
            title: "Evento",
            description: "Trabalho Acadêmico",
            imgUrl: evento,
            Link: 'https://github.com/lorrayne-amorim/ESX'
        },
        {
            title: "Telemedicina",
            description: "Trabalho Acadêmico",
            imgUrl: medlink,
            Link: 'https://github.com/lorrayne-amorim/Trabalho-Telemedicina'
        },
    ];

    return (
        <section className="project" id="projects" >
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projetos</h2>
                                    <p>
                                        Aqui você encontra alguns dos projetos que desenvolvi, incluindo trabalhos acadêmicos e um projeto profissional.
                                        Um dos meus projetos atuais, desenvolvido como bolsista — utilizando React, TypeScript e Node — é confidencial e não pôde ser incluído por questões de sigilo.
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Loja de Carros</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Evento</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Telemedicina</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row className="justify-content-center">
                                                    <ProjectCard {...projects[0]} />
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row className="justify-content-center">
                                                    <ProjectCard {...projects[1]} />
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row className="justify-content-center">
                                                    <ProjectCard {...projects[2]} />
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>


        </section>
    )
}
