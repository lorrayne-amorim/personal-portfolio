import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, Link }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={Link} target="_blank" rel="noopener noreferrer" className="proj-link">
                    <img
                        src={imgUrl}
                        alt={title}
                        style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "8px",
                        }}
                    />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
        </Col>
    );
};
