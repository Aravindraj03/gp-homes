import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Aboutmission = ({
  heading = "Our Vision",
  text = "We aim to build sustainable and inclusive communities through innovative real estate development that values design, nature, and people.",
  imageUrl = "https://via.placeholder.com/600x400",
  backgroundColor = "#f7f7f7",
}) => {
  return (
    <div style={{ backgroundColor: backgroundColor, padding: "4rem 0" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">{heading}</h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <Image src={imageUrl} alt="Section Visual" fluid rounded />
          </Col>
          <Col md={6}>
            <p className="lead">{text}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Aboutmission;
