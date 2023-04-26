import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSession, signOut } from "next-auth/react";
import { Button } from "react-bootstrap";
import { useProSidebar } from "react-pro-sidebar";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
function DashboardNavbar() {
  const { data } = useSession();
  const { collapseSidebar } = useProSidebar();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <span onClick={() => collapseSidebar()}>
          <AiFillCloseCircle size={40} color="White" className="mx-3" />
        </span>
        <Container>
          <Navbar.Brand as={Link} href="/admin/dashboard">
            <Image src={"/logo.png"} height={60} width={60} />
            GoodVibes Education Consultancy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div
                style={{
                  
                  width: "60%",
                  margin: "auto",
                  color: "white",
                  display:"flex",
                  gap:"10px"
                 
                }}
              >
                <span style={{ color: "white" }}>Welcome</span>
                <h5 style={{ color: "red" }} className="my-auto">
                  {data?.user?.email}
                </h5>
              </div>
            </Nav>
            <Nav>
              <Button
                variant="danger"
                onClick={() => {
                  signOut({ redirect: true, callbackUrl: "/" });
                }}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default DashboardNavbar;
