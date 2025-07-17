import { Col, Carousel } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrls, link }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={link} target="_blank" rel="noopener noreferrer" className="proj-link">
                    <Carousel controls={imgUrls.length > 1} indicators={imgUrls.length > 1}>
                        {imgUrls.map((url, idx) => (
                            <Carousel.Item key={idx}>
                                <img
                                    src={url}
                                    alt={`${title} screenshot ${idx + 1}`}
                                    style={{
                                        width: "100%",
                                        height: "300px",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                    }}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
        </Col>
    );
};
