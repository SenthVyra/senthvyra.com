import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import BlogCard from "./BlogCard";
import blogPosts from "../../data/blogPosts";

function Blog() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs</strong>
        </h1>
        <p style={{ color: "white" }}>
          Field notes on building HABB, in my own words.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogPosts.map((post) => (
            <Col md={4} className="blog-card" key={post.link}>
              <BlogCard {...post} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
