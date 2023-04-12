import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../../styles/Header.module.scss";
import Image from "next/image";

function Header() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      router.push(`/blog?keyword=${keyword}`);
      setKeyword("");
    } else {
      navigate(`/blog`);
    }
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{ textAlign: "center" }}
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          {/* <Image src={"/logo.png"} height={80} width={80} /> */}
          Goodvibes  Consultancy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{}}>
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              AboutUs
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} href="/country">
              Country
            </Nav.Link>
            <Nav.Link as={Link} href="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} href="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} href="/successstory">
              SuccessfulStoryGallery
            </Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex my-2">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
              <Button variant="outline-success" onClick={searchSubmitHandler}>
                Search
              </Button>
            </Form>
            <Link href={"/apply"} className="my-auto">
              <Button className={styles.headerButton}>Apply Now</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
