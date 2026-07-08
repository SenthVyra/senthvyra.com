import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaLinkedin, FaMediumM } from "react-icons/fa";
import logo from "../../Assets/logo.png";
import { slugFromLink } from "../../data/blogPosts";

function BlogCard({ title, link, pubDate, categories, thumbnail, excerpt, linkedinLink, mediumLink }) {
  const formattedDate = new Date(pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const to = `/blog/${encodeURIComponent(slugFromLink(link))}`;

  return (
    <Card className="blog-card-view">
      <Link to={to} className="blog-link">
        <Card.Img
          variant="top"
          src={thumbnail || logo}
          alt={`${title} thumbnail`}
          style={!thumbnail ? { objectFit: "contain", padding: "40px", background: "#1c1c1c" } : undefined}
        />
      </Link>
      <Card.Body>
        <Card.Subtitle className="mb-2" style={{ color: "#a588c0" }}>
          {formattedDate}
        </Card.Subtitle>
        <Card.Title>
          <Link to={to} className="blog-link">
            {title}
          </Link>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{excerpt}</Card.Text>

        <div style={{ marginBottom: "14px" }}>
          {categories.map((tag) => (
            <span
              key={tag}
              style={{
                display: "inline-block",
                fontSize: "0.72rem",
                color: "#a588c0",
                border: "1px solid #6d20c5d7",
                borderRadius: "12px",
                padding: "2px 10px",
                marginRight: "6px",
                marginBottom: "6px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <Button as={Link} to={to} variant="primary">
            Read More &nbsp; <AiOutlineArrowRight />
          </Button>
          {linkedinLink && (
            <Button
              href={linkedinLink}
              target="_blank"
              rel="noreferrer"
              variant="outline-light"
            >
              <FaLinkedin /> &nbsp;LinkedIn
            </Button>
          )}
          {mediumLink && (
            <Button
              href={mediumLink}
              target="_blank"
              rel="noreferrer"
              variant="outline-light"
            >
              <FaMediumM /> &nbsp;Medium
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
