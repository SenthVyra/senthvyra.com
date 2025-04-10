import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function MyPresence() {
  return (
    <Container fluid className="my-5">
      {/* Section Title */}
      <Row className="justify-content-center text-center mb-5">
        <Col md={10}>
          <h1 className="project-heading">
            My <strong className="purple">Presence</strong> Online
          </h1>
          <p style={{ color: "#666" }}>
            Proof of passion, code, and community — all in one space.
          </p>
        </Col>
      </Row>

      {/* Facebook Feed */}
      <Row className="justify-content-center text-center my-4">
        <Col md={8}>
          <h2 className="project-heading mb-3">
            <strong className="purple">Facebook</strong> Feed
          </h2>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/senthvyra"
            data-tabs="timeline"
            data-width="400" 
            data-height="300"  
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/senthvyra"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/senthvyra">Senth Vyra</a>
            </blockquote>
          </div>
        </Col>
      </Row>

            {/* GitHub Calendar */}
            <Row className="justify-content-center text-center my-4">
        <Col md={8}>
          <h2 className="project-heading mb-3">
            Days I <strong className="purple">Code</strong>
          </h2>
          <GitHubCalendar
            username="SenthVyra"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </Col>
      </Row>

      {/* Google Maps */}
      <Row className="justify-content-center text-center my-4">
        <Col md={8}>
          <h2 className="project-heading mb-3">
            <strong className="purple">My Location</strong>
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63383688.60152992!2d-74.9524576!3d14.157641199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc6952ebf1a6d7%3A0x8f73382025174dc4!2sSenthalan%20Vyravanathan!5e0!3m2!1sen!2slk!4v1744274810182!5m2!1sen!2slk"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google me!"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MyPresence;
