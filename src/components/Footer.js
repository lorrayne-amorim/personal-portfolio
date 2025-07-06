import { Container, Row, Col } from "react-bootstrap";
import { PhraseFrame } from "./PhraseFrame";
import logo from "../assets/img/logo-lo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <PhraseFrame />
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://linkedin.com/in/lorrayne-amorim-fernandes-da-cunha-2b9606220" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/lorrayne.afdc/" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook" /></a>
                            <a href="https://www.instagram.com/lorrayneamoriim/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <p>Copyright 2025. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


