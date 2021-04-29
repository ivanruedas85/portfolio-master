import Link from 'next/link'
import {Navbar, Nav} from 'react-bootstrap'

const Navbarra = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link href="/">
          Portafolio
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link href="/blog">
              Blog
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/github">
              Github
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarra;
