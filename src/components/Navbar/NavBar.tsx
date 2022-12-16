import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {

  const connected: boolean = false;
  return (<>
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="./logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Yourtube
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/playlist">Vidéos</Nav.Link>
        </Nav>
        {connected ?
          <Navbar.Text>
            Vous êtes connecté en tant que: <a href="/profile">Mark Otto</a>
          </Navbar.Text>
          :
          <Nav>
            <Nav.Link href="/signin">Se connecter</Nav.Link>
          </Nav>
        }


      </Container>
    </Navbar>
  </>);
}

export default NavBar;

function useState(arg0: string | null): [any, any] {
  throw new Error('Function not implemented.');
}
