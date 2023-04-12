import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSession, signOut } from "next-auth/react";
import { Button } from "react-bootstrap";
import { useProSidebar } from "react-pro-sidebar";
import { AiFillCloseCircle } from "react-icons/ai";
function DashboardNavbar() {
  const { data } = useSession();
  const { collapseSidebar } = useProSidebar();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <span onClick={() => collapseSidebar()}>
          <AiFillCloseCircle  size={40} color="White" className="mx-3"/>
        </span>
        <Container>
          <Navbar.Brand href="#home">GoodVibes Education Consultancy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div
                style={{
                  textAlign: "center",
                  width: "40%",
                  margin: "auto",
                  color: "white",
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
