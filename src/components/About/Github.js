import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="SenthVyra"
        blockSize={15}
        blockMargin={5}
        color="#E8A33D"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
