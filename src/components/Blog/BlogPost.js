import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import blogPosts, { slugFromLink } from "../../data/blogPosts";
import { AiOutlineArrowLeft } from "react-icons/ai";

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => slugFromLink(p.link) === slug);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const formattedDate = new Date(post.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="blog-post-container">
        <Link to="/blog" className="blog-link blog-post-back">
          <AiOutlineArrowLeft /> &nbsp;Back to Blogs
        </Link>

        <div className="blog-post-meta mono">{formattedDate}</div>
        <h1 className="blog-post-title">{post.title}</h1>

        <div style={{ marginBottom: "24px" }}>
          {post.categories.map((tag) => (
            <span key={tag} className="blog-post-tag">
              {tag}
            </span>
          ))}
        </div>

        <img
          src={post.thumbnail}
          alt={`${post.title} cover`}
          className="blog-post-cover"
        />

        <div className="blog-post-body">
          <p>{post.summary}</p>
        </div>

        <Link to="/blog" className="blog-link blog-post-back">
          <AiOutlineArrowLeft /> &nbsp;Back to Blogs
        </Link>
      </Container>
    </Container>
  );
}

export default BlogPost;
