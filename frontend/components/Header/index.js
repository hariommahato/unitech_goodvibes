import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../../styles/Header.module.scss";
import Image from "next/image";

function Header() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    if (keyword.trim()) {
      router.push(`/blog?keyword=${keyword}`);
      setKeyword("");
    } else {
      router.push(`/blog`);
    }
  };
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        searchSubmitHandler(event);
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ textAlign: "center" }}
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          href="/"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image src={"/logo.png"} height={60} width={60} />
          <h5 className={styles.companyName}>Good vibes Education Consultancy</h5>
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
            <Link href={"/apply"} className="my-auto mx-2">
              <Button className={styles.headerButton} variant="primary">
                Apply Now
              </Button>
            </Link>
            <Form className="d-flex my-2 mx-auto">
              <Form.Control
                type="search"
                placeholder="Search blogs ......"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
