import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <Container className="p-4">
        <Row>
          <Col xs={12} md={6}>
            <section className="my-4">
              <h2>Contact</h2>
              <p>
                Email: <a href="mailto:dhar.sabyasachi.vi@gmail.com">dhar.sabyasachi.vi@gmail.com</a>
              </p>
              <p>
                LinkedIn: 
                <a
                  href="www.linkedin.com/in/sabyasachi-dhar-1020166a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </p>
              <p>
                <a href={`${process.env.PUBLIC_URL}/files/sachisresume.pdf`} download="sachisresume.pdf">Download CV</a>
              </p>
            </section>
          </Col>
          <Col xs={12} md={6}>
            <section className="my-4">
              <h2>Certificates</h2>
              <div className="d-flex">
                <img
                  src={`${process.env.PUBLIC_URL}/images/certificates/azure-az-900.png`}
                  alt="Azure AZ-900"
                  className="img-fluid m-2"
                  style={{ maxWidth: "100px" }}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/certificates/scrum-foundation.png`}
                  alt="Scrum Foundation Professional Certificate"
                  className="img-fluid m-2"
                  style={{ maxWidth: "100px" }}
                />
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
