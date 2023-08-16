import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

function Navs() {
  //! consuming
  const { user, setUser } = useContext(LoginContext);

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <Image
              width={"150px"}
              style={{ borderRadius: 15 }}
              src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1486/original/154501622_229303615559487_6563442827570757849_n.jpg"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>

            {user?.email && user?.password ? (
              <Link className="nav-link" to="/login">
                Logout
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
