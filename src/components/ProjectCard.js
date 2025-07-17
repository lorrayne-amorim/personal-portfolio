// ProjectCard.jsx
import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, Link }) => {
    const count = imgUrl.length;
    const width = `${100 / count}%`;

    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={Link} target="_blank" rel="noopener noreferrer" className="proj-link">
                    <div
                        style={{
                            display: "flex",
                            gap: "8px",
                            marginBottom: "8px"
                        }}
                    >
                        {imgUrl.map((url, idx) => (
                            <img
                                key={idx}
                                src={url}
                                alt={`${title} ${idx + 1}`}
                                style={{
                                    width,
                                    height: "200px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                }}
                            />
                        ))}
                    </div>

                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
        </Col>
    );
};
