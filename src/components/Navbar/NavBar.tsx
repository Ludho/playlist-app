import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {

    return ( <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="./logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Tontube
          </Navbar.Brand>
          <Nav.Link href="/playlist">Vidéo</Nav.Link>
          <Navbar.Text>
            Signed in as: <a href="/profile">Mark Otto</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </> );
}

export default NavBar;