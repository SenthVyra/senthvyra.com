import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import "../style.css"; // Custom styles applied here

function NavBar() {
  const [expand, setExpand] = useState(false); // Navbar expand state
  const [navColour, setNavColour] = useState(false); // Navbar color change on scroll

  const contactButtonRef = useRef(null);

  const handleLogoClick = () => {
    if (contactButtonRef.current) {
      contactButtonRef.current.click(); // Simulate clicking the "Contact Me" button
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky glass-navbar" : "navbar glass-navbar"}
    >
      <Container>
        <Navbar.Brand
          as="div"
          onClick={handleLogoClick}
          className="d-flex align-items-center"
        >
          <img src={logo} className="logo-glow" alt="brand" />
        </Navbar.Brand>

        {/* Custom Toggle Button */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand((prevExpand) => !prevExpand)}
          className="custom-toggler" // Apply custom class for styling
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                href="https://iam.senthvyra.com"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog /> Intro
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => setExpand(false)}>
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => setExpand(false)}>
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => setExpand(false)}>
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="blinking-contact-btn">
              <Button
                ref={contactButtonRef}
                as={Link}
                to="/blog"
                onClick={() => setExpand(false)}
                variant="danger"
                className="blinking-button"
              >
                <ImBlog /> Blogs
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
